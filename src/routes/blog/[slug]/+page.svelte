<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import BlogAuthor from '../../../components/BlogAuthor.svelte';
	import { redirect } from '@sveltejs/kit';
	import { marked } from 'marked';
	import './markdown.css';
	export let data;
	const blog = data.blog;
	if (!blog) {
		redirect(300, '/');
	}

	let blogContent = marked(blog.content);
</script>

<div class="w-full flex justify-center">
	<div class="pb-[200px] w-[50vw] max-md:w-full">
		<h1 class="ESRG-TRIAL-font max-md:text-4xl text-6xl font-bold opacity-95">
			{blog.title}
		</h1>
		<div class="my-3">
			<BlogAuthor {blog} />
		</div>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			src={blog.thumbnailSrc}
			class="w-full h-auto aspect-[5/3] rounded-[25px] border border-white object-cover"
		/>
		<div class="markdown">
			{@html blogContent}
		</div>
	</div>
</div>
