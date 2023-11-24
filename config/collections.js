/* Creating a collection containing all blogposts by filtering based on folder and filetype */
const getAllPosts = (collectionApi) => {
  return collectionApi.getFilteredByGlob('./src/blog/**/*.md')
  // .reverse()
}

const getCategoryList = (collectionApi) => {
  let tags = []
  const blogPosts = collectionApi.getFilteredByGlob('./src/blog/**/*.md')

  blogPosts.forEach((item) => {
    tags = tags.concat(item.data.tags || []) // Concatenate tags from each post
  })

  return [...new Set(tags)]
}

module.exports = {
  getAllPosts,
  getCategoryList
}
