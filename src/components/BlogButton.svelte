<script lang="ts">
	import type { Blog } from '$lib/types';

	export let blog: Blog;
</script>

<a class="block w-full" href={`/blog/${blog.title}`}>
	<div class="flex flex-col justify-center">
		<img
			src={blog.thumbnailSrc}
			alt={``}
			class="w-full object-cover max-md:max-h-[300px] aspect-[4/3] rounded-[24px] border border-[#d9d9d9]"
		/>
		<div class="text-white text-[2.3rem] max-md:text-[1.3rem] font-normal mt-5 sfpro-font">
			{blog.title}
		</div>
		<div class="text-[#9c9c9c] text-[1.3rem] max-md:text-[1rem] font-normal sfpro-font">
			{blog.author.name ? blog.author.name : blog.author}
		</div>
	</div>
</a>
