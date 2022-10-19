<script>
// @ts-nocheck

	 /** @type {import('./$types').PageData} */	
	 export let data;
	 console.log(data.recipe)

	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/splide/dist/css/splide.min.css';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<article class="content">
	<h1>About</h1>
     <hr />
	 <section class="my-8">
Here is some info about me.
	 <Splide  options={ {
		rewind: true,
		width : 1000,
		gap   : '1rem',
		height: '14em',
	  } } class="w-full md:w-2/3 mx-auto px-12 py-6">
		<SplideSlide class="grid place-items-center place-content-center">
		  <div class="grid place-items-center place-content-center">
			<span class="text-center font-bold mb-6">My Philosophy</span>
			<img src="/images/phil.jpeg" alt="phil" class="w-full object-contain h-auto"/>
		  </div>
		</SplideSlide>
		<SplideSlide class="grid place-items-center place-content-center">
		  <div class="grid place-items-center place-content-center">
			<span class="text-center font-bold mb-6">My Hobbies</span>
			<ul>
				<li>Cooking</li>
				<li>Reading</li>
				<li>Coding</li>
				<li>Playing Go</li>
			</ul>
		</div>
		</SplideSlide>
		<SplideSlide class="grid place-items-center place-content-center">
			<div class="grid place-items-center place-content-center">
			<span class="text-center font-bold mb-6">My Favorite Food</span>
			<img src="/images/crab.jpeg" alt="crab" class="w-full lg:w-3/4 object-contain h-auto" />
			</div>
		  </SplideSlide>
		  <SplideSlide class="grid place-items-center place-content-center">
			<div class="grid place-items-center place-content-center">
			<span class="text-center font-bold mb-6">My Favorite Cookery</span>
			<table style="width:100%">
				<tr>
					{#each data.recipe as item}
					<th>{item.type}</th>
					{/each}
				</tr>
				<tr>
					{#each data.recipe as item}
					<td>{item.name}</td>
					{/each}
				</tr>
			</table>
			</div>
		  </SplideSlide>
	  </Splide>
	</section>
	
</article>

<style>
	table, td, th {
		@apply border border-zinc-500 border-collapse;
	}
	th, td {
		@apply bg-zinc-200 text-center px-4 py-2;
}
</style>