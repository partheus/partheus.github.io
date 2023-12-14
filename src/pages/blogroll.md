---
eleventyNavigation:
    key: blogroll
    order: 4
tags: ['page']
templateEngineOverride: njk, md
title: Blogroll
description: Friends and neighbors
permalink: /blogroll/
date: 2023-12-03
---
#### A list of friends and neighbors, designed mainly to share a bit of web traffic.

> Last updated: {{ date | readableDate }}. These are not all actively updated sites. See description.

{% from 'macros/blogrollItem.njk' import blogrollItem %}

#### Friends and neighbors:

<div class="display-columns display-columns--two slide-up-half-slow mr-auto mt-sm mb-sm">
        {% for card in friends.blogroll %}{{ blogrollItem(
            title=card.title,
            siteUrl=card.siteUrl,
            shortUrl=card.shortUrl
        ) }}{% endfor %}
</div>

#### Places on the web I've built:
<div class="display-columns display-columns--two slide-up-half-slow mr-auto mt-sm mb-sm">
        {% for card in friends.subsites %}{{ blogrollItem(
            title=card.title,
            siteUrl=card.siteUrl,
            shortUrl=card.shortUrl
        ) }}{% endfor %}
</div>
