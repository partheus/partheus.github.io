---
title: Thoughts
description: Stuff
permalink: /thoughts/
---
> Placeholder content is currently from P.G. Wodehouse's collected works

<div class="thoughts">
  {% for thought in thoughts %}
    <div class="thought">
      <img src="/assets/img/sunface.svg" alt="Profile Pic" class="album-cover">
      <p class="thought-content">{{ thought.content }}</p>
    </div>
  {% endfor %}
</div>
