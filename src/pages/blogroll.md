---
layout: page
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

> Last updated: {{ date | readableDate }}. These are not all actively updated sites. See description.

{% from 'macros/blogrollItem.njk' import blogrollItem %}

<div class="display-columns display-columns--two slide-up-half-slow ml-auto mr-auto mt-sm mb-sm max-content-width">
        {% for card in friends.blogroll %}{{ blogrollItem(
            title=card.title,
            siteUrl=card.siteUrl
        ) }}{% endfor %}
</div>
