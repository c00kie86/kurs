export type ProductItemType = {
	id: string;
	name: string;
	price: number;
	category: string;
	rating: number;
	coverImage: {
		width: number;
		height: number;
		src: string;
		alt: string;
	};
};
