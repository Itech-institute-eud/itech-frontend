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
		<div className="w-full my-4">
			<div className="max-w-[800px] mx-auto">
				<Carousel
					plugins={[
						Autoplay({
							delay: 2000,
						}),
					]}
				>
					<CarouselContent>
						{galleryImages.map((item) => (
							<CarouselItem id={item.path}>
								<div className="relative w-[800px] h-[500px]">
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
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	)
}

export default Gallery
