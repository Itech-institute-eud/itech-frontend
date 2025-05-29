'use client'

import Image from 'next/image'

interface Other_BranchsProps {
	title: string
	address: string
	phone: string[]
	imagePath: string
}

const OtherBranch = ({ title, address, phone, imagePath }: Other_BranchsProps) => {
	return (
		<div className="h-[350px] lg:h-[500px] w-fit p-4">
			<div className="relative size-full">
				<Image src={`/images/${imagePath}`} alt={imagePath} fill className="object-contain" />
			</div>
			<div className="flex flex-col gap-5 mt-2 lg:mt-5">
				<h1 className="text-center text-xl font-bold">{title}</h1>
				<div className="flex flex-col gap-2">
					<div className="flex space-x-1.5 items-center lg:text-lg">
						<span className='font-bold'>Phone: </span>
						{phone.map((item) => (
							<span className='text-yellow-200' key={item}>{item}</span>
						))}
					</div>
					<p className="text-sm w-fit lg:w-[700px] lg:text-lg">
						<span className="font-bold">Address: </span> {address}
					</p>
				</div>
			</div>
		</div>
	)
}

export default OtherBranch
