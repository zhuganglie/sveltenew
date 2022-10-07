<script>
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
		width : 800,
		gap   : '1rem',
		height: '12em',
	  } } class="w-full md:w-2/3 mx-auto px-12 py-6">
		<SplideSlide class="grid place-items-center place-content-center">
		  <div class="grid place-items-center place-content-center">
			<span class="text-xl font-bold mb-6">How I deal with life issues?</span>
			<img src="/images/phil.jpeg" alt="phil" class="max-w-full h-auto"/>
		  </div>
		</SplideSlide>
		<SplideSlide class="grid place-items-center place-content-center">
		  <div class="grid place-items-center place-content-center">
			<span class="text-xl font-bold mb-6">What I like to do?</span>
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
			<span class="text-xl font-bold mb-6">What I like to eat?</span>
			<img src="/images/crab.jpeg" alt="crab" width="150" class="w-1/2 h-auto" />
			</div>
		  </SplideSlide>
	  </Splide>
	</section>
</article>