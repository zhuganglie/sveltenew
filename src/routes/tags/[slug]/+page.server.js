
import { posts } from '$lib/data/posts'

// @ts-ignore
export async function load({ params }) {
    const { slug } = params
    const filteredPosts = posts.filter(post => post.tags.includes(slug))
    return {
        params: slug,
        posts:filteredPosts
    }
}


