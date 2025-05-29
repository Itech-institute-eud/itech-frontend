'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface DescriptionProps {
	text: string
}

const Description = ({ text }: DescriptionProps) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	const controls = useAnimation()

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		}
	}, [isInView, controls])

	return (
		<motion.p
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0, x: 50 },
				visible: {
					opacity: 1,
					x: 0,
					transition: {
						duration: 0.6,
						ease: [0.4, 0.0, 0.2, 1],
					},
				},
			}}
			className="p-[2px] text-lg font-inter md:text-sm lg:text-2xl text-center  text-white"
		>
			{text}
		</motion.p>
	)
}

export default Description
