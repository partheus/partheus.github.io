---
title: Design
description: Also check out the pixel art page from the footer
permalink: /design/
layout: page
---

<div class="masonry-container">
  {% for card in designProjects %}
    <div class="masonry-item">
      <img src="{{ card.imageUrl }}" alt="{{ card.title }}">
    </div>
  {% endfor %}
</div>

