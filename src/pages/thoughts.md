---
title: Thoughts
description: Pay no mind, Hastings
permalink: /thoughts/
---

<div class="display-columns mt-md mr-auto">
  {% for thought in thoughts %}<div class="thought">
      <img src="/assets/img/sunface.svg" alt="Profile Pic" class="album-cover">
{% if thought.link %}<a class="thought-link" target="_blank" href="{{ thought.link }}" title="{{ thought.linktitle }}">&#8599;</a>{% endif %}<p class="thought-content">{{ thought.content }}</p></div>{% endfor %}
</div>
