<script>
	import { formatDate } from '$lib/date';
    /** @type {import('./$types').PageData} */
    export let data
  </script>
  
  <svelte:head>
    <title>{data.post.title}</title>
  </svelte:head>
  
  <article class="">
    <h1 class="!mb-2">
        {data.post.title}
    </h1>
    <div class="opacity-70 mb-2 flex space-x-6">

      <div class="flex items-center justify-center space-x-1"> 
        <div class="i-mdi-calendar text-lg" />
        <div>{formatDate(data.post.date)}</div>
      </div>
      
    <div class="flex items-center justify-center space-x-1">
      <div class="i-mdi-clock text-lg" />
      <div>{data.post.readingTime}</div>
    </div>
    </div>
    <div class="flex items-center justify-start space-x-4">
      {#each data.post.tags as tag}
       <span class="list-none bg-zinc-200 rounded  px-2 py-0.5"> <a href="/tags/{tag}">{tag}</a></span>
      {/each}
    </div>
  <hr />

    <div class="relative">
      <!-- render the post -->
      <svelte:component this={data.component} />
  </div>
  
</article>
  
  <div class="mt-8 px-2 py-1 rounded flex justify-between bg-zinc-100  max-w-max">
    <a href={`/blog`} class="">
      All Posts 
    </a>
  </div>
  

  
 