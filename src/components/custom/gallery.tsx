'use client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import { galleryImages } from '@/data'

const Gallery = () => {
	return (
		<div className="w-full my-4 overflow-x-auto">
			<div className="w-[90%] md:w-[70%] mx-auto">
				<Carousel
					plugins={[
						Autoplay({
							delay: 2000,
						}),
					]}
				>
					<CarouselContent>
						{galleryImages.map((item) => (
							<CarouselItem key={item.path}>
								<div className="relative w-[500px] h-[500px] md:w-[700px] md:h-[500px] p-2 mx-auto">
									<Image
										alt={item.path}
										src={`/images/gallery/${item.path}`}
										fill
										className="object-contain"
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	)
}

export default Gallery
