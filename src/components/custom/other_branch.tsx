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
		<div className="p-4 border-2 bg-white/30 backdrop-blur-lg border-white/30 shadow-lg rounded-2xl flex-1 h-[500px]">
			<Image src={`/images/${imagePath}`} alt={imagePath} width={350} height={350} />
			{/* From here text begins */}
			<div className="flex w-fit flex-col gap-5 mt-2 lg:mt-5">
				<h1 className="text-xl font-bold">{title}</h1>
				<div className="flex flex-col gap-2">
					<div className="flex space-x-1.5 items-center lg:text-lg">
						<span className="font-bold">Phone: </span>
						{phone.map((item) => (
							<span key={item}>{item}</span>
						))}
					</div>
					<p className="text-sm w-fit  lg:text-lg">
						<span className="font-bold">Address: </span> {address}
					</p>
				</div>
			</div>
		</div>
	)
}

export default OtherBranch
