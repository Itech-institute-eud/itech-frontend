import Reveal from './reveal'

interface DescriptionProps {
	text: string
}

const Description = ({ text }: DescriptionProps) => {
	return (
		<Reveal>
			<p className="p-[2px] text-lg font-inter md:text-sm lg:text-2xl text-center  text-white">
				{text}
			</p>
		</Reveal>
	)
}

export default Description
