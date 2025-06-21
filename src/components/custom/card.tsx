'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import Container from './container'

interface CardProps {
	title: string
	desc: string
	path: string
}

const Card = ({ title, desc, path }: CardProps) => {
	return (
		<Container>
			<motion.div
				initial={{ scale: 0.7, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				viewport={{ once: true, amount: 0.2 }}
				className="font-inter bg-white shadow-sm shadow-white overflow-hidden rounded-2xl h-[400px]"
			>
				<div>
					<Image alt={title} src={path} width={400} height={400} objectFit="cover" />
				</div>
				<div className="flex flex-col flex-grow justify-between p-4 space-y-3">
					<h1 className="text-xl font-bold text-center">{title}</h1>
					<p className="text-center text-[12px]">{desc}</p>
				</div>
			</motion.div>
		</Container>
	)
}

export default Card
