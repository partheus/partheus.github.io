---
title: How to fix Goodreads widget image quality
description: A little tutorial on how to fix the compressed images in the Goodreads widget
date: 2023-10-22
tags:
  - development
  - tutorial
  - goodreads
  - javascript
---
Okay. So, I've been using Goodreads for a while now, and I've been using their widget to display my reading list on my website. It's a pretty cool widget, and it's pretty easy to use.
The issue is, the images are compressed.

When the Goodreads script pulls in the image URLs, it adds a `_SX98_` or `_SY160_` to the URL. This is what causes the images to be compressed. I'm not sure why Goodreads does this, but it's a pretty easy fix.

Just create a new script tag, and add the following code to it:

```javascript
<script>
// Get all the img elements with the class "gr_grid_book_container"
var imgElements = document.querySelectorAll('.gr_grid_book_container img');

// Loop through each img element and modify the src attribute
imgElements.forEach(function (imgElement) {
    // Get the current src attribute
    var src = imgElement.getAttribute('src');

    // Replace both "_SX98_" and "_SY160_" portions with an empty string
    src = src.replace(/_SX98_.|_SY160_.|Y160_./g, '');

    // Set the modified src attribute back to the img element
    imgElement.setAttribute('src', src);
});

</script>
```

>
This will remove the `_SX98_` and `_SY160_` from the image URLs, and the images will no longer be compressed.

One small callout is that when the page first loads, the images will be compressed for a split second, and then the script will run and fix the images. This is because the script runs after the page has loaded. I will try to find a way to fix this, but for now, this is a pretty good solution.
