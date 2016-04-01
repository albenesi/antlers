module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-shell');

    grunt.config('shell', {
        options: {
            stderr: false,
            execOptions: {
              maxBuffer: Infinity
            }
        },
        push_prod_s3: {
            command: 'aws --profile antlers s3 cp _site/ s3://antlers.io --recursive --include \'*\' --acl \'public-read\''
        },
        push_episodes: {
            command: 'aws --profile antlers s3 sync _tpn/ s3://tpn.antlers.io --include \'*\' --acl \'public-read\''
        },
        download_report: {
            command: 'aws --profile antlers s3 sync s3://logs-antlers.io ./_s3_logs && ' +
              'bundle exec request-log-analyzer -f amazon_s3 --output html --file report.html _s3_logs'
        }
    });
};