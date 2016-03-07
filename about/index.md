---
layout: page
title: About
permalink: /about/
---
What is this?
: antlers.io a mega-neat website to provide neat content from neat people.

What kind of content are you going to release?
: Nothing is certain, but here are some things we'd like to create: blog posts, comics, podcasts, Twitch streams, photography, and other neat things.

Sure, sure, but why "antlers.io"?
: Because antlers are regal and offer a neat logo opportunity. Also 'antlers.io' was cheap and easy to remember.

Who are the authors?
: Good question! Here's the list: {% for name in site.data.authors.list %}{% assign author = site.data.authors.data[name] %}<a href='/author/{{author.url}}.html'>{{ author.name }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}

How do you feel about Space Camp?
: It's not as great as it's made out to be.

<!-- <p>
  Neat Authors: {% for name in site.data.authors.list %}{% assign author = site.data.authors.data[name] %}<a href='/author/{{author.url}}.html'>{{ author.name }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}
</p> -->