// place files you want to import through the `$lib` alias in this folder.
export type Blog = {
	id: string;
	title: string;
	thumbnailSrc: string;
	content: string; // markdown
	author: Author | string;
};

export type Author = {
	name: string;
	profileIconSrc: string;
	role?: string;
	description?: string;
};
