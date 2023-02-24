<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fade } from 'svelte/transition';
	import "prismjs/themes/prism.css";
	import 'uno.css';
	import '../app.css';
  	
	/**
	 * @type {{ currentRoute: any; }}
	 */
	 export let data
</script>

<div class="flex flex-col h-screen justify-between">
<Header />

{#key data.currentRoute}
<main in:fade={{ duration: 150, delay: 150}} out:fade={{ duration: 150}} class="p-4 w-full md:w-1/2 mx-auto mt-8 mb-auto">
	<slot />
</main>
{/key}

<Footer />

</div>

