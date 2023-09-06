import Image from "next/image";
import { type ProductItemType } from "@/ui/types";

type ProductCoverImageProps = {
	product: ProductItemType;
};

export const ProductCoverImage = ({
	product: { coverImage },
}: ProductCoverImageProps) => {
	return (
		<div className="current-color hover:bg-slate-10 rounded-md border border-slate-500">
			<Image
				className="w-full object-contain object-center p-4 transition-transform hover:scale-105"
				width={coverImage.width}
				height={coverImage.height}
				src={coverImage.src}
				alt={coverImage.alt}
			/>
		</div>
	);
};
