---
title: Reading
description: Goodreads data for the last 200 or so books I've read. Updated every time I finish a book.
permalink: /reading/
date: Last Modified
layout: page
---
> Clicking on the book covers will take you to the book's Goodreads page of **my review**. Sometimes the javascript doesn't load, so you might have to refresh the page.

<div class="mt-md mb-md">
<div class="goodreads-current slide-up-half">

    <!-- <div id="gr_grid_widget_1647304638"> -->
      <!-- Show static html as a placeholder in case js is not enabled - javascript include will override this if things work -->
    
    <!-- <script
      src="https://www.goodreads.com/review/grid_widget/60162168.Parth's%20bookshelf:%20currently-reading?cover_size=medium&hide_link=true&hide_title=true&num_books=4&order=d&shelf=currently-reading&sort=date_updated&widget_id=1647304638"
      type="text/javascript"
      charset="utf-8"
    ></script> -->
    
    
    <script src="https://www.goodreads.com/review/custom_widget/60162168.Parth's%20bookshelf:%20currently-reading?cover_position=left&cover_size=small&num_books=5&order=d&shelf=currently-reading&show_author=1&show_cover=0&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=true&widget_border_width=none&widget_id=1662769460&widget_text_color=000000&widget_title_size=large&widget_width=full" type="text/javascript" charset="utf-8"></script>

</div>
</div>

      <div id="gr_grid_widget_1697873408">
        <!-- Show static html as a placeholder in case js is not enabled - javascript include will override this if things work -->
        <h2>
          <a style="text-decoration: none;" rel="nofollow" href="https://www.goodreads.com/review/list/60162168-parth-shiralkar?shelf=read&utm_medium=api&utm_source=grid_widget">Parth's bookshelf: read</a>
        </h2>

      </div>
      <script src="https://www.goodreads.com/review/grid_widget/60162168.Parth's%20bookshelf:%20read?cover_size=medium&hide_link=true&hide_title=&num_books=200&order=d&shelf=read&sort=date_read&widget_id=1697873408" type="text/javascript" charset="utf-8" loading="lazy"></script>

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

