import { getAllBlogs } from '../../db/tempBlogs';

export function load() {
	const blogs = getAllBlogs();
	return { blogs };
}
