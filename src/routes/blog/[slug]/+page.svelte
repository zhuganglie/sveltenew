<script>
// @ts-nocheck

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
    <div class="opacity-70 mt-8 flex space-x-6">

      <div class="flex items-center justify-center space-x-1"> 
        <div class="i-mdi-calendar text-lg" />
        <div>{formatDate(data.post.date)}</div>
      </div>
      
    <div class="flex items-center justify-center space-x-1">
      <div class="i-mdi-clock text-lg" />
      <div>{data.post.readingTime}</div>
    </div>
    </div>
   
  <hr />

    <div class="mt-8">
      <!-- render the post -->
      <svelte:component this={data.component} />
  </div>
  
</article>
  
<div class=" flex justify-between items-start gap-4 mt-8">
<div class=" flex flex-wrap gap-2 ">
  {#each data.post.tags as tag}
   <span class=" list-none bg-zinc-200 rounded  px-2 py-0.5 "> <a href="/tags/{tag}" class="">{tag}</a></span>
  {/each}
</div>
<div class="px-2 py-0.5 rounded items-center bg-zinc-200 min-w-max gap-2">
    <a href={`/blog`} class="inline-block">
      All Posts 
    </a>
  </div>
  </div>
<hr />
  <div class="mt-6">
    <span class="font-bold">Comments</span>
    <script src="https://utteranc.es/client.js"
          repo="zhuganglie/sveltenew"
          issue-term="pathname"
          label="Comment"
          theme="github-light"
          crossorigin="anonymous"
          async>
  </script>
  </div>

  

  
 