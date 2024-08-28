import { redirect } from '@sveltejs/kit'
import { posts } from '$lib/data/posts'
import { paginate } from '$lib/util'

export const prerender = true;
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let page = 1
  let limit = 5

  if (params.page) {
    try {
      // a url of /posts/page/2 will come through as 'page/2' for params.page
      const index = params.page.split('page/').pop()
      if (index) {
        page = parseInt(index)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const postsForPage = paginate(posts, { limit, page })

  // if page doesn't exist, direct to page 1
  if (postsForPage.length === 0) {
    throw redirect(302, '/blog')
  }

  return {
    posts: postsForPage,
    page,
    limit
  }
}
