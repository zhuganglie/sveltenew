<script>
    /**
	 * @type {{ uniqueTags: any; }}
	 */
     export let data
    //console.log(data.uniqueTags)
</script>

<svelte:head>
  <title>Posts | Tags</title>
</svelte:head>


<div class="">
  <h1 class="text-3xl">Tags</h1>
  <hr />
  
  <ul>
    {#each data.uniqueTags as tag}
    <li>
      <a href="/tags/{tag.title}">
        { tag.title }
      </a>
      ({tag.count})
    </li>
    {/each}
  </ul>
</div>