<script lang="ts">
	import type { Blog } from '$lib/types';

	export let blog: Blog;
</script>

{#if typeof blog.author === 'string'}
	<h2 class="font-semibold opacity-80">By {blog.author}</h2>
{:else}
	<div class="flex flex-row items-center gap-4">
		<enhanced:img
			alt={`profile picture for ${blog.author.name}`}
			class="font-semibold rounded-full w-10 aspect-square object-cover"
			src={blog.author.profileIconSrc}
		/>
		<h2 class="opacity-80">By {blog.author.name}</h2>
	</div>
{/if}
