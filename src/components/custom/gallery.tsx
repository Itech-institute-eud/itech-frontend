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
		<div className="my-4 overflow-x-hidden">
			<div className="w-full md:w-[70%] mx-auto">
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
								<div className="relative w-[400px] h-[300px] md:h-[500px] md:w-full mx-auto">
									<Image
										alt={item.path}
										src={`/images/gallery/${item.path}`}
										fill
										className="object-contain md:object-contain"
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
