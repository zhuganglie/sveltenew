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
	 <section>
<h2>This is what I like to do.</h2>
	 <Splide  options={ {
		rewind: true,
		width : 800,
		gap   : '1rem',
		height: '12em',
	  } } class="w-full md:w-2/3 mx-auto">
		<SplideSlide class="grid place-items-center place-content-center">
		  <div class="grid place-items-center place-content-center">Cooking</div>
		</SplideSlide>
		<SplideSlide class="grid place-items-center place-content-center">
		  <div class="grid place-items-center place-content-center">Reading</div>
		</SplideSlide>
		<SplideSlide class="grid place-items-center place-content-center">
			<div class="grid place-items-center place-content-center">Coding</div>
		  </SplideSlide>
	  </Splide>
	</section>
</article>