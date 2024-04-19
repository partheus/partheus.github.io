---
title: AnimeJS and Eleventy
description: A new side project to learn more about animations and Eleventy.
date: 2024-04-16
tags: [animations, development]
---
A post about my new side project to learn more about animations and Eleventy.

I created a simple site for eleventy including sass, from my starter template on github.

Here's the steps I took to add animejs to my project:

1. Install animejs
```bash
npm install animejs
```

2. Create a new file in your project, for example `{% raw %}animations.njk{% endraw %}` and add the following code:
```html
<script src="https://cdn.jsdelivr.net/npm/animejs"></script>
```

4. Create a new file in your project, for example `src/_includes/animation.js` and add the following code:
```javascript
anime({
  targets: '.animation',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 800
});
```

5. Include the file in your layout file, for example `src/_includes/layouts/base.njk`:
```html
<script src="/js/animation.js"></script>
```

6. Add the class `animation` to the element you want to animate:
```html
<div class="animation">Hello World!</div>
```

That's it! You should now see the element animate when you load the page. Staging site for this project is [here](https://platinumstar.netlify.app/).
