import { browser } from '$app/environment'
import { formatDate } from '$lib/date'
import { parse } from 'node-html-parser'
// @ts-ignore
import readingTime from 'reading-time/lib/reading-time.js'


if (browser) {
  throw new Error(`posts can only be imported server-side`)
}


export const posts = Object.entries(import.meta.glob('/posts/**/*.md', { eager: true }))
  .map(([filepath, post]) => {
    // @ts-ignore
    const html = parse(post.default.render().html)
    return {
      // @ts-ignore
      ...post.metadata,

      // generate the slug from the file path
      slug: filepath
        .replace(/(\/index)?\.md/, '')
        .split('/')
        .pop(),

      // whether or not this file is `my-post.md` or `my-post/index.md`
      // (needed to do correct dynamic import in posts/[slug].svelte)
      isIndexFile: filepath.endsWith('/index.md'),

      
      // @ts-ignore
     date: post.metadata.date
        ? formatDate(post.metadata.date)
        : undefined,

      // get estimated reading time for the post
      readingTime: readingTime(html.structuredText).text,

      // Extract text content from HTML
      content: html.structuredText
    }
  })

  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  // add references to the next/previous post
  .map((post, index, allPosts) => ({
    ...post,
    next: allPosts[index - 1],
    previous: allPosts[index + 1]
  }))

// @ts-ignore
function addTimezoneOffset(date) {
  const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000
  return new Date(new Date(date).getTime() + offsetInMilliseconds)
}
