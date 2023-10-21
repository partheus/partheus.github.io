/* Creating a collection containing all blogposts by filtering based on folder and filetype */
const getAllPosts = (collectionApi) => {
  return collectionApi.getFilteredByGlob('./src/blog/**/*.md')
  // .reverse()
}

const getCategoryList = (collectionApi) => {
  const catPages = []
  let categories = []
  const blogPosts = collectionApi.getFilteredByGlob('./src/blog/**/*.md')

  blogPosts.map((item) => {
    categories.push(item.data.category)
  })

  const temp = [...new Set(categories)]

  return catPages
}

module.exports = {
  getAllPosts,
  getCategoryList
}
