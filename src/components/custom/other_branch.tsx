'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Heading from './heading'

interface Other_BranchsProps {
	title: string
	address: string
	phone: string[]
	imagePath: string
}

const OtherBranch = ({ title, address, phone, imagePath }: Other_BranchsProps) => {
	return (
		<div className="h-[400px] lg:h-[500px] w-fit p-4 my-14">
			<div className="relative size-full">
				<Image src={`/images/${imagePath}`} alt={imagePath} fill className="object-contain" />
			</div>
			<div className="flex flex-col gap-5 mt-2 lg:mt-5">
				<h1 className="text-center text-2xl font-bold">{title}</h1>
				<div className="flex flex-col gap-2">
					<div className="flex space-x-1.5 items-center lg:text-lg">
						<span className='font-bold'>Phone: </span>
						{phone.map((item) => (
							<span key={item}>{item}</span>
						))}
					</div>
					<p className="w-fit lg:w-[700px] lg:text-lg">
						<span className="font-bold">Address: </span> {address}
					</p>
				</div>
			</div>
		</div>
	)
}

export default OtherBranch
