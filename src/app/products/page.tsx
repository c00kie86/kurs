import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Product 1",
		price: 666,
		category: "Shapes",
		rating: 2,
		coverImage: {
			width: 256,
			height: 256,
			alt: "Product 1",
			src: "/images/product_1.png",
		},
	},
	{
		id: "2",
		name: "Product 2",
		price: 777,
		category: "Shapes",
		rating: 3.5,
		coverImage: {
			width: 256,
			height: 256,
			alt: "Product 2",
			src: "/images/product_2.png",
		},
	},
	{
		id: "3",
		name: "Product 3",
		price: 451,
		category: "Shapes",
		rating: 4.5,
		coverImage: {
			width: 256,
			height: 256,
			alt: "Product 3",
			src: "/images/product_3.png",
		},
	},
	{
		id: "4",
		name: "Product 4",
		price: 86,
		category: "Shapes",
		rating: 5,
		coverImage: {
			width: 256,
			height: 256,
			alt: "Product 4",
			src: "/images/product_4.png",
		},
	},
];

export default function Products() {
	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
