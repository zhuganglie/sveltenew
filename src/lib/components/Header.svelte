<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import { clickOutside } from 'svelte-use-click-outside';

	let open = false;
	const toggleHeader = () => {
		open = !open;
	};
	const clickOutsideHandler = () => {
		open = false;
	};
	const routes = [
		{ href: '/', name: 'Home' },
		{ href: '/blog', name: 'Blog' },
		{ href: '/tags', name: 'Tags' },
		{ href: '/about', name: 'About' },
		{ href: '/contact', name: 'Contact' }
	];
</script>

<nav
	class="sticky top-0 bg-zinc-100 z-999 w-full px-8 py-4 flex justify-between md:justify-around shadow"
>
	<!--<div class="bg-teal-900 rounded-full h-min px-3.5 py-0.5">
		<span class=" text-teal-50 text-2xl md:text-3xl font-bold">YZC</span>
	</div>-->
		<img src="/images/yzc-teal.svg" alt="yzc" class="m-o p-0 w-8 h-8 md:w-12 md:h-12">
	

	<ul
		class:hidden={!open}
		class="min-w-max mt-18 md:my-0 md:flex md:flex-row md:justify-around md:items-center md:space-x-6 md:space-y-0 space-y-4 md:space-y-0"
	>
		{#each routes as route}
			<li
				class="list-none px-2 py-1 m-0"
				class:active={$page.url.pathname === route.href ||
					$page.url.pathname.includes(route.href + '/')}
			>
				<a prefetch href={route.href} class="">{route.name}</a>
			</li>
		{/each}
	</ul>

	<div
		use:clickOutside={clickOutsideHandler}
		tabindex="0"
		role="button"
		class="md:hidden"
		class:open
		on:click={toggleHeader}
		on:keypress
	>
		<div class:open class="i-mdi-menu text-3xl text-teal-900 font-bold" />
	</div>
</nav>

<style>
	.active {
		@apply font-bold border-b-solid border-b-2 border-b-teal-900;
	}
	.open {
		@apply i-mdi-close text-3xl text-teal-900;
	}
</style>
