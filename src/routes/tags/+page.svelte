<script>
	/**
	 * @type {{ uniqueTags: any; }}
	 */
	export let data;
	//console.log(data.uniqueTags)
</script>

<svelte:head>
	<title>Posts | Tags</title>
</svelte:head>

<div class="">
	<h1 class="text-3xl">Tags</h1>
	<hr />

	<div class="mt-8 flex flex-wrap gap-2">
		{#each data.uniqueTags as tag}
			<div class="rounded bg-zinc-100 px-2 py-1 min-w-max">
				<a href="/tags/{tag.title}">
					{tag.title}
				</a>
				({tag.count})
			</div>
		{/each}
	</div>
</div>
