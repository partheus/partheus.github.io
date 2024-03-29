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
    return (tags || []).filter(tag => ["entry", "nav", "article", "posts", "pages", "blog", "weeknotes", "featured"].indexOf(tag) === -1);
}

// Function to randomize arrays
const randomizeArray = (array) => {
  if (!Array.isArray(array)) {
    return array;
  }

  const shuffledArray = array.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

module.exports = {
  readableDate,
  getFirstCategory,
  getFilterTagList,
  getArticleYear,
  randomizeArray
}
