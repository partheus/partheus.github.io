const { DateTime } = require('luxon')

const readableDate = (dateObj) => {
  return DateTime.fromJSDate(dateObj, {
    zone: 'system',
  }).setLocale('en').toLocaleString(DateTime.DATE_FULL)
}

const getArticleYear = (dateObj) => {
  // Create a Luxon DateTime object from the provided dateObj
  return DateTime.fromJSDate(dateObj, {zone: 'system'}).setLocale('en').toFormat('yyyy');
}

const getFirstCategory = (categoryArray) => {
  // If categoryArray is an array and it has at least one element, return the first element
  if (Array.isArray(categoryArray) && categoryArray.length) {
    return categoryArray[0];
  }

  // If categoryArray is not an array or is an empty array, return an empty string
  return "";
};

// filter taglists
const getFilterTagList = (tags) => {
    return (tags || []).filter(tag => ["entry", "nav", "post", "posts", "pages", "blog"].indexOf(tag) === -1);
}

module.exports = {
  readableDate,
  getFirstCategory,
  getFilterTagList,
  getArticleYear
}
