<script>
    import { name } from '$lib/info.js'
    /** @type {import('./$types').PageData} */
    export let data
    //console.log(data)
    $: isFirstPage = data.page === 1
    $: hasNextPage = data.posts[data.posts.length - 1]?.previous
  </script>
  
  <svelte:head>
    <title>{name} | Blog</title>
  </svelte:head>
  
  <div class="">
    <h1>Posts</h1>
<hr />
    <div class="flex-grow space-y-4">
      {#each data.posts as post}
      {#if !post.draft}
        <div class="py-8 px-4 first:pt-0 border-1">
          <p><span class=" underline">{post.date}</span></p>
         <h2 class="text-center"><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
          <ul class="flex space-x-4">
          {#each post.tags as tag}
           <li class="list-none border-1 border-teal-900 rounded-full px-2 py-0.5"> <a href="/tags/{tag}">{tag}</a></li>
          {/each}
          </ul>
        </div>
        {/if}
      {/each}
    </div>
  
    <!-- pagination -->
    <div class="flex visible items-center justify-between pt-8 opacity-70">
      {#if !isFirstPage}
        <a href={`/blog/page/${data.page - 1}`}>
          Previous
          </a>
      {:else}
        <div />
      {/if}
  
      {#if hasNextPage}
        <a href={`/blog/page/${data.page + 1}`}>Next</a>
      {/if}
    </div>
  </div>