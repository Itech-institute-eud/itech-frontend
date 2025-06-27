'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

interface IRevealProps {
	children: React.ReactNode
}

const Reveal = ({ children }: IRevealProps) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	const mainControls = useAnimation()
	const slideControl = useAnimation()

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible')
			slideControl.start('visible')
		}
	}, [isInView])

	return (
		<div ref={ref} className="relative overflow-hidden">
			<motion.div
				variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				{children}
			</motion.div>
			<motion.div
				variants={{ hidden: { left: 0 }, visible: { left: '100%' } }}
				initial="hidden"
				animate={slideControl}
				transition={{ duration: 0.5, ease: 'easeIn' }}
				className="absolute top-4 bottom-4 left-0 right-0 bg-primary-heading z-20"
			></motion.div>
		</div>
	)
}

export default Reveal
