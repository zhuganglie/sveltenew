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
    <main class="flex-grow space-y-4 mt-8">
      {#each data.posts as post}
      {#if !post.draft}
        <article class="py-8 px-4 bg-zinc-50">
          <p class=" underline">{post.date}</p>
         <h2 class="text-center"><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
          <p class="flex space-x-4">
          {#each post.tags as tag}
           <a href="/tags/{tag}" class="list-none bg-zinc-200  rounded-full px-2 py-0.5">{tag}</a>
          {/each}
          </p>
        </article>
        {/if}
      {/each}
      </main>
  
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