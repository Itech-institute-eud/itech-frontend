import Image from 'next/image'

import Reveal from './reveal'

interface ServiceCardProps {
	title: string
	subTitle: string
	description: string
	imagePath: string
}

const ServiceCard = ({ title, subTitle, description, imagePath }: ServiceCardProps) => {
	return (
		<Reveal>
			<div className="p-4 md:p-6 lg:p-10 flex flex-col space-y-20 rounded-xl  bg-white/20 backdrop-blur-lg shadow-lg  transition-colors  hover:bg-white/40">
				<div>
					<h1 className="font-bold text-xl">{title}</h1>
					<p className=" text-sm">{description}</p>
				</div>

				<div className="bg-white rounded-xl max-w-full shadow-xl">
					<div className="flex items-start space-x-5">
						<div className="object-cover p-2 md:p-4">
							<Image src={imagePath} alt="solutions" height={100} width={100} />
						</div>
						<div className="p-2 md:p-4 flex flex-col space-y-4 w-full justify-centerk">
							<h1 className="font-semibold md:font-bold text-sm md:text-xl">{subTitle}</h1>
						</div>
					</div>
				</div>
			</div>
		</Reveal>
	)
}

export default ServiceCard
