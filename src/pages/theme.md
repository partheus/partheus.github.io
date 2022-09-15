---
title: "Theme Switcher"
description: "Secret page. Welcome."
---
> This switch will save your preference in local browser storage. To reset to default (dark) theme, simply delete the site cache from your browser history.

<div class="theme-switch-wrapper">
    <select class="uppercase bold600 theme-switch" name="theme" id="theme-switcher">
        <option value="none">Select theme</option>
        <option value ="dark">Dark (default)</option>
        <option value ="light">Light</option>
        <option value ="gemstone">Gemstone</option>
        <option value ="strawberry">Strawberry</option>
        <option value ="jackdaw">Jackdaw</option>
    </select> 
    <button class="irevamp-button bold600 uppercase" onclick="switchTheme()">Apply Theme</button>
</div>   

<div style="text-align: center;">

<button onclick="history.back()" class="irevamp-mx-auto intro-about bold600 uppercase pagenotfound-button" style="">Go back</button>

</div>

