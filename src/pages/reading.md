---
title: Reading
description: Goodreads data for the last 72 or so books I've read. Updated every time I finish a book.
permalink: /reading/
date: Last Modified
layout: page
---
> Clicking on the book covers will take you to the book's Goodreads page of **my review**.

> I am on StoryGraph as well: [@sparth](https://app.thestorygraph.com/profile/sparth)

<div class="mt-md mb-sm slide-up-half">

      <div id="gr_grid_widget_1697873408-reading">
        <!-- Show static html as a placeholder in case js is not enabled - javascript include will override this if things work -->

      </div>
      <script src="https://www.goodreads.com/review/grid_widget/60162168.Parth's%20bookshelf:%20reading%20now?cover_size=medium&hide_link=true&hide_title=&num_books=8&order=d&shelf=currently-reading&sort=date_read&widget_id=1697873408-reading" type="text/javascript" charset="utf-8" loading="lazy"></script>
</div> 

<div class="mt-md mb-sm">

      <div id="gr_grid_widget_1697873408">
        <!-- Show static html as a placeholder in case js is not enabled - javascript include will override this if things work -->

      </div>
      <script src="https://www.goodreads.com/review/grid_widget/60162168.Parth's%20bookshelf:%20read%20recently?cover_size=medium&hide_link=true&hide_title=&num_books=72&order=d&shelf=read&sort=date_read&widget_id=1697873408" type="text/javascript" charset="utf-8" loading="lazy"></script>
</div>

<noscript>
## If you wish to keep Javascript disabled, you can view some recent reads added manually:

{% include "components/readingMonth.njk" %}
</noscript>

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

    // Add the loading attribute for lazy loading
    imgElement.setAttribute('loading', 'lazy');

    // Add the decoding attribute for async decoding
    imgElement.setAttribute('decoding', 'async');
});

</script>

