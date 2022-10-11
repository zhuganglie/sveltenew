import { posts } from "$lib/data/posts"

export const prerender = true;
export const load = async ({}) => {
let uniqueTags = {}
posts.forEach(post => {
    post.tags.forEach((/** @type {PropertyKey} */ tag) => {
      if (uniqueTags.hasOwnProperty(tag)) {
        // @ts-ignore
        uniqueTags[tag].count += 1
      } else {
        // @ts-ignore
        uniqueTags[tag] = {
          title: tag,
          count: 1
        }
      }
    })
  })
  const sortedUniqueTags = 
    Object.values(uniqueTags)
      // @ts-ignore
      .sort((a, b) => a.title > b.title)
      return {
      uniqueTags: sortedUniqueTags
      }
}