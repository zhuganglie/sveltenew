<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import 'uno.css';
	import '../app.css';
</script>

<div class="flex flex-col h-screen justify-between">
<Header />

<main class="p-4 w-full md:w-1/2 mx-auto mt-8 mb-auto">
	<slot />
</main>

<Footer />

</div>

