import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import type { Blog } from '$lib/types';
import { read } from '$app/server';

export const getBlogPath = async () => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);
	console.log(read(path.join(__dirname, '../')));
	return path.join(__dirname, '../db/blogs.json');
};

export const getBlogsFromJSON = async () => {
	const BLOG_JSON_PATH = await getBlogPath();
	const fileContents = read(BLOG_JSON_PATH);
	const parsedBlogs = JSON.parse(await fileContents.text());
	const blogs: Blog[] = parsedBlogs as Blog[];
	console.log(blogs, 'blogs');

	return blogs;
};

export const getBlogsFromTitle = async (title: string) => {
	const BLOG_JSON_PATH = await getBlogPath();
	const fileContents = read(BLOG_JSON_PATH);
	const parsedBlogs = JSON.parse(await fileContents.text());
	const blogs: Blog[] = parsedBlogs as Blog[];
	const blog = blogs.find((blog) => blog.title === title);

	if (!blog) {
		throw new Error(`Blog with title "${title}" not found.`);
	}

	console.log(blog, 'blog');
	return blog;
};
