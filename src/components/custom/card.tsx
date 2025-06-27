import Image from 'next/image'

import Container from './container'
import Reveal from './reveal'

interface CardProps {
	title: string
	desc: string
	path: string
}

const Card = ({ title, desc, path }: CardProps) => {
	return (
		<Container>
			<Reveal>
				<div className="font-inter bg-white shadow-sm shadow-white overflow-hidden rounded-2xl h-[400px]">
					<div>
						<Image alt={title} src={path} width={400} height={400} objectFit="cover" />
					</div>
					<div className="flex flex-col flex-grow justify-between p-4 space-y-3">
						<h1 className="text-xl font-bold text-center">{title}</h1>
						<p className="text-center text-[12px]">{desc}</p>
					</div>
				</div>
			</Reveal>
		</Container>
	)
}

export default Card
