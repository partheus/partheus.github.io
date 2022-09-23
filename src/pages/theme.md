---
title: "Theme Switcher"
description: "Secret page. Welcome."
---
> This option will save your preference in local browser storage. To reset to default (dark) theme, simply delete the site cache from your browser history.

<div class="theme-switch-wrapper">
    <select class="uppercase bold600 theme-switch" name="theme" id="theme-switcher">
        <option value="none">Current: <script>document.write(localStorage.getItem('theme'));</script></option>
        <option value ="noir">Noir (default)</option>
        <option value ="gemstone">Gemstone</option>
        <option value ="maroon">Maroon</option>
        <option value ="jackdaw">Jackdaw</option>
    </select> 
</div>   

<div style="text-align: center;">
    <button class="irevamp-button bold600 uppercase" onclick="switchTheme()">Apply Theme</button>
</div>

