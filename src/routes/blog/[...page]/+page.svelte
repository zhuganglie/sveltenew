<script>
    import { name } from '$lib/info.js'

    /** @type {import('./$types').PageData} */
    export let data

    let searchInput = ''

    /**
	 * @type {any[]}
	 */
    let filteredPosts = []

    $: {
      filteredPosts = data.posts.filter(post =>
        post.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    }

    $: isFirstPage = data.page === 1

    $: hasNextPage = data.posts.length === data.limit
  </script>

  <svelte:head>
    <title>{name} | Blog</title>
  </svelte:head>

  <div class="">
    <h1>Posts</h1>
    <hr />
    <div class="my-8 w-full md:w-1/3 mx-auto">
      <input
        type="text"
        bind:value={searchInput}
        placeholder="Search posts..."
        class="border border-gray-400 px-3 py-2 rounded-md w-full"
      />
    </div>
    <main class="flex-grow space-y-4 mt-8">
      {#each filteredPosts as post}
        {#if !post.draft}
          <article class="py-8 px-4 bg-zinc-50">
            <p class=" underline">{post.date}</p>
           <p class="text-center text-lg font-semibold"><a href={`/blog/${post.slug}`}>{post.title}</a></p>
            <p class="w-fit inline-block space-x-4 space-y-2 ">
            {#each post.tags as tag}
             <a href="/tags/{tag}" class="w-fit inline-block list-none bg-zinc-200  rounded-full px-2 py-0.5">{tag}</a>
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
