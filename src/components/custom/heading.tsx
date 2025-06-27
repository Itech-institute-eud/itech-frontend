import Container from './container'
import Reveal from './reveal'

interface HeadingProps {
	title: String
	className?: string
}

const Heading = ({ title, className }: HeadingProps) => {
	return (
		<Container className="mt-3">
			<Reveal>
				<h1
					className={`${className} font-inter text-white font-extrabold text-2xl lg:text-4xl text-center`}
				>
					{title}
				</h1>
			</Reveal>
		</Container>
	)
}

export default Heading
