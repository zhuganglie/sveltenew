
import { posts } from '$lib/data/posts'

export const prerender = true;
// @ts-ignore
export async function load({ params }) {
    const { tag } = params
    const filteredPosts = posts.filter(post => post.tags.includes(tag))
    return {
        params: tag,
        posts:filteredPosts
    }
}


