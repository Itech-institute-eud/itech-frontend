import { MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

interface Other_BranchsProps {
	title: string
	address: string
	phone: string[]
	imagePath: string
}

const OtherBranch = ({ title, address, phone, imagePath }: Other_BranchsProps) => {
	return (
		<div className="border m-2 p-3 w-full  bg-white/20 backdrop-blur-lg border-white/30 shadow-lg rounded-lg flex flex-col gap-3">
			<h1 className="text-2xl text-center font-semibold text-black my-2">{title}</h1>
			<div className="relative object-contain  max-w-[300px] h-[400px] ">
				<Image
					src={`/images/${imagePath}`}
					alt="other_branchs"
					layout="fill"
					className="object-contain opacity-90 rounded-2xl"
				/>
			</div>
			<div className="flex-1/2 flex flex-col gap-15 ">
				<div className=" text-white flex flex-col gap-2">
					<h1 className="text-xl font-semibold text-center">Contact Us</h1>
					<div className=" flex gap-4 items-center">
						<div className=" flex items-center gap-2">
							<Phone />
							{/* <h3 className="text-lg font-semibold">Phone Number: </h3> */}
						</div>
						<a href={`tel:${phone[0]}`} className="text-md text-black text-center">
							{phone[0]}
						</a>
						<a href={`tel:${phone[1]}`} className="text-md text-black text-center">
							{phone[1]}
						</a>
					</div>
					<div className=" flex gap-4 items-center ">
						<div className=" flex items-center gap-1">
							<MapPin className="text-lg" />
							{/* <h3 className="text-lg font-semibold">Location: </h3> */}
						</div>
						<span className="text-sm  text-black">{address}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OtherBranch
