---
title: "Build Date in Footer"
date: 2023-10-27
tags: 
    - development
    - tutorial
    - javascript
    - node
description: A quick post on how I added a build date to the footer of this website.
---
This post assumes the following:
- You know what a package.json file is
- You know what a build script is
- You know what a static site generator is
- You know what a footer is

If you don't know what any of those things are, I recommend you read up on them before continuing.

## The Problem

I wanted to add a build date to the footer of this website, in the format of `YYYY-MM-DD`. It would update every time a new build was made and deployed.

## The Solution

Add a line of code in your build script that saves the date to a global variable, and then use that variable in your footer.

## The Code

##### package.json

```json
{
    "scripts": {
      "build": "eleventy"
    }
}
```

the `build` script becomes

##### package.json

```json
{
  "build": "BUILD_DATE=$(TZ='America/Los_Angeles' date +'%d %B %Y') eleventy"
}
```

In your footer, you can then use the `BUILD_DATE` variable in double curly brackets.

##### src/_includes/footer.njk

## The Explanation

The `BUILD_DATE` variable is set to the output of the `date` command, which is a Unix command that prints the current date and time. The `TZ` flag sets the timezone to the one specified, in this case, `America/Los_Angeles`. The `+` flag specifies the format of the output, which is `'%d %B %Y'` in this case. The `%d` is the day of the month, `%B` is the full month name, and `%Y` is the full year.

 You can find your timezone by referring to the [Wikipedia entry](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
