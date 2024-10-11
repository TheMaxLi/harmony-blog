import { getBlogByTitle } from '../../../db/tempBlogs';

export const load = async ({ params }) => {
	const blog = getBlogByTitle(params.slug);

	return { blog };
};
