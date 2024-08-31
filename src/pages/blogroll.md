---
tags: ['page']
templateEngineOverride: njk, md
title: Blogroll
description: A list of friends and neighbors, designed mainly to share a bit of web traffic
permalink: /blogroll/
date: 2023-12-13
---

> ### I'm maintaining this page on a bit of a whim. Bear with me. And there's a honeycomb.
<br>
{% from 'macros/blogrollItem.njk' import blogrollItem %}

#### Places on the web I've built:
<div class="display-columns display-columns--two slide-up-half-slow mr-auto mt-sm mb-sm">
        {% for card in friends.subsites %}{{ blogrollItem(
            title=card.title,
            siteUrl=card.siteUrl,
            shortUrl=card.shortUrl
        ) }}{% endfor %}
</div>

> Last updated: {{ date | readableDate }}. These are not all actively updated sites. See description.
