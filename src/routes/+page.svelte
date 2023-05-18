<script>
// @ts-nocheck

	import Typewriter from 'svelte-typewriter'
	</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="min-h-max">
	<div>
		<img src="/images/casual.webp" alt="Welcome" class="w-full h-auto"/>
	</div>
	<Typewriter mode=cascade interval=180>
	<div class="one text-3xl text-center">
		<h1 class="text-3xl md:ml-12 mb-12">临 江 仙</h1>
		<p  class="font-bold  font-sans  text-base md:ml-12 mb-12">『 明 』 &middot; 杨慎 </p>
				<p class="md:ml-4">滚滚长江东逝水，</p>
				<p class="md:ml-4">浪花淘尽英雄。</p>
				<p class="md:ml-4">是非成败转头空。</p>
				<p class="md:ml-4">青山依旧在，</p>
				<p class="md:ml-8">几度夕阳红。</p>
                
				<p class="md:ml-4">白发渔樵江渚上，</p>
				<p class="md:ml-4">惯看秋月春风。</p>
				<p class="md:ml-4">一壶浊酒喜相逢。</p>
				<p class="md:ml-4">古今多少事，</p>
				<p class="md:ml-4">都付笑谈中。</p>
	</div> 
</Typewriter>
</main>

<style>  
	@import url('https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap');
		.one {  
			font-family: 'Zhi Mang Xing', cursive;
			margin: 0 auto;  
		}  
		@media (min-width: 768px){
			.one {
				font-family: 'Zhi Mang Xing', cursive;
				margin: 0 auto;
				writing-mode: vertical-rl;/*从右向左是 writing-mode: vertical-rl;*/  
				text-align: center;
			}
		}
		</style>  