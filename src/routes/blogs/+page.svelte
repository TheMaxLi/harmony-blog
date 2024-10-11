<script>
	import Blogs from '../../components/Blogs.svelte';
	export let data;
	const blogs = data.blogs;
</script>

<div class="pb-[200px]">
	<h1 class="max-md:text-9xl text-[200px] pt-8 ESRG-TRIAL-font">Blog</h1>
	<p class="text-4xl max-md:text-3xl w-full sfpro-font mb-60 mt-5 max-md:mb-40">
		Follow along our journey as we build your partner for care.
	</p>
	<p class="text-6xl ESRG-TRIAL-font max-md:text-5xl w-full sfpro-font mb-12">Explore our blogs!</p>
	<Blogs {blogs} />
</div>
