import { getAllBlogs } from '../db/tempBlogs';

export const load = async () => {
	const blogs = getAllBlogs();
	return { blogs };
};
