<script lang="ts">
	import type { Blog } from '$lib/types';
	import BlogButton from './BlogButton.svelte';

	export let blogs: Blog[];
</script>

<div class="grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-md:grid-cols-1 w-full">
	{#if blogs.length > 0}
		{#each blogs as blog}
			<div class="h-full flex justify-center">
				<BlogButton {blog} />
			</div>
		{/each}
	{:else}
		<div>No posts available.</div>
	{/if}
</div>
