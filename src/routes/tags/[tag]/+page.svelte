<script>
// @ts-nocheck

    /**
	 * @type {{ posts: any; }}
	 */
     export let data
    //console.log(data.posts)
</script>

<div>
<h1>Posts with Tag: {data.params} </h1>
<hr />

{#if data.posts.length }
  <ol class="mt-8">
    {#each data.posts as post}
    {#if !post.draft}
      <li>
          <a href="/blog/{post.slug}">
            {post.title}
          </a>
      </li>
      {/if}
    {/each}
  </ol>
  <a href="/tags" class="mt-8 px-2 py-1 rounded bg-zinc-100">All Tags</a>
{:else}
<p><strong>Ope!</strong> Sorry, couldn't find any note under the tag "{data.params}".</p>
{/if}
</div>

