---
title: Thoughts
description: Things that I realize are passing through my mind, with occasional links for music and such
permalink: /thoughts/
---

<div class="thoughts mt-md ml-auto mr-auto">
  {% for thought in thoughts %}<div class="thought">
      <img src="/assets/img/sunface.svg" alt="Profile Pic" class="album-cover">
{% if thought.link %}<a class="thought-link" target="_blank" href="{{ thought.link }}" title="{{ thought.linktitle }}">&#8599;</a>{% endif %}<p class="thought-content">{{ thought.content }}</p></div>{% endfor %}
</div>
