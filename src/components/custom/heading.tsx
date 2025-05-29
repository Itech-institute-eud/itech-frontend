'use client'
import { motion, useAnimation, useInView } from 'framer-motion'

import Container from './container'
import { useEffect, useRef } from 'react'

interface HeadingProps {
	title: String
	className?: string
}

const Heading = ({ title, className }: HeadingProps) => {
	const ref = useRef(null)
	const inView = useInView(ref, { once: true, margin: '-100px' })
	const controls = useAnimation()

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [inView, controls])

	return (
		<Container className="mt-3">
			<motion.h1
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={{
					hidden: { opacity: 0, y: 40, scale: 0.95 },
					visible: {
						opacity: 1,
						y: 0,
						scale: 1,
						transition: {
							duration: 0.6,
							ease: [0.4, 0.0, 0.2, 1],
						},
					},
				}}
				className={`font-inter text-white font-extrabold text-2xl lg:text-4xl text-center ${className}`}
			>
				{title}
			</motion.h1>
		</Container>
	)
}

export default Heading
