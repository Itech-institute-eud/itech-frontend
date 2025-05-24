'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
	{ title: 'cruze cars', path: '/images/cruze cars.jpeg' },
	{ title: 'education partner kabir trust', path: '/images/education partner kabir trust.png' },
	{ title: 'matrex softwares.jpeg', path: '/images/matrex softwares.jpeg' },
	{ title: 'redrobe.jpeg', path: '/images/redrobe.jpeg' },
]

const Marquee = () => {
	return (
		<div className="overflow-hidden py-2 lg:py-4 relative bg-gray-100">
			<motion.div
				className="flex gap-8 min-w-max"
				animate={{ x: ['0%', '-40%'] }}
				transition={{
					repeat: Infinity,
					repeatType: 'loop',
					duration: 10,
					ease: 'linear',
				}}
			>
				{[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
					<div key={index} className="relative w-[120px] h-[60px]">
						<Image src={logo.path} alt={logo.title} layout="fill" className="object-contain" />
					</div>
				))}
			</motion.div>
		</div>
	)
}

export default Marquee
