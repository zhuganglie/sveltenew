<script>
	import Social from './Social.svelte'
</script>

<footer class="w-full text-center flex flex-col md:flex-row md:items-end justify-center space-y-1 md:space-y-0 md:space-x-12  py-4">
	<Social />
	<p>&copy; {new Date().getFullYear()} YZC <sup><small>&reg;</small></sup></p>
</footer>