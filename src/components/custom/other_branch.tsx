import { MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

interface Other_BranchsProps {
	title: string
	address: string
	phone: string[]
}

const OtherBranch = ({ title, address, phone }: Other_BranchsProps) => {
	return (
		<div className="border m-2 p-3 w-full md:flex-1/2 bg-white/20 backdrop-blur-lg border-white/30 shadow-lg rounded-lg border-b-primary-links">
			<div className="relative object-cover w-full md:w-[200px] md:h-[200px] h-full">
				<Image src={'/images/Other_Branchs.png'} alt="other_branchs" layout="fill" />
			</div>
			<div className="w-full">
				<h1 className="text-xl text-center font-semibold text-white">{title}</h1>
				<div className=" text-white flex flex-col gap-5">
					<h1 className="text-xl font-semibold">Contact Us</h1>

					<div className=" flex gap-4 items-center">
						<div className=" flex items-center gap-2">
							<Phone className="text-xl" />
							<h3 className="text-lg font-semibold">Phone Number: </h3>
						</div>
						<a href={`tel:${phone[0]}`} className="text-md text-black text-center">
							{phone[0]}
						</a>
						<a href={`tel:${phone[1]}`} className="text-md text-black text-center">
							{phone[1]}
						</a>
					</div>
					<div className=" flex gap-4 items-center ">
						<div className=" flex items-center gap-2">
							<MapPin className="text-2xl" />
							<h3 className="text-lg font-semibold">Location: </h3>
						</div>
						<span className="text-md  text-start text-black">{address}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OtherBranch
