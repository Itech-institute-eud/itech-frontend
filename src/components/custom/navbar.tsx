'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { links } from '@/data'
import MainLogo from '../../../public/icons/mainLogo'
import Container from './container'

const Navbar = () => {
	const path = usePathname()
	const [show, setShow] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleOnClick = () => {
		setShow((prev) => !prev)
	}
	return (
		<Container
			className={`${
				isScrolled ? 'bg-white/20 backdrop-blur-lg border-white/30 shadow-lg' : 'bg-black'
			} transition-colors  sticky top-0 z-40`}
		>
			{/* NAVBAR START */}
			<nav className=" w-full h-[70px] flex  lg:justify-center lg:items-center ">
				<div className="w-full flex justify-between lg:justify-center  items-center">
					{/* MAIN LOGO */}
					<div>
						<MainLogo />
					</div>
					{/* LINKS */}
					<div className="hidden lg:flex w-full justify-evenly items-center">
						{links.map((item, i) => (
							<Link
								className={`text-sm  uppercase  font-semibold ${
									path == item.link ? 'text-primary-links' : 'text-white'
								}`}
								key={i}
								href={item.link}
							>
								{item.title}
							</Link>
						))}
					</div>

					{/* MOBILE NAVBAR */}

					{!show && (
						<div className="lg:hidden p-0.5">
							<button onClick={handleOnClick}>
								<Menu className="text-white" />
							</button>
						</div>
					)}

					{show && (
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: show ? 0 : '100%' }}
							transition={{ type: 'spring', stiffness: 100 }}
							className="h-64 w-40 absolute top-5 right-5 rounded-xl p-2 bg-white shadow-lg"
						>
							<div className="w-full flex justify-end p-0">
								<button onClick={handleOnClick}>
									<X />
								</button>
							</div>

							<div className=" flex flex-col space-y-4 h-full">
								{links.map((item, i) => (
									<Link
										className={`text-[11px] uppercase  font-semibold ${
											path == item.link ? 'text-primary-links' : 'text-black'
										} z-50`}
										key={i}
										href={item.link}
									>
										{item.title}
									</Link>
								))}
							</div>
						</motion.div>
					)}
				</div>
			</nav>
		</Container>
	)
}

export default Navbar
