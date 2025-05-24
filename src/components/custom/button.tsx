interface IButtonProps {
	text: string
}

const Button = ({ text }: IButtonProps) => {
	return (
		<button className="rounded-lg bg-primary-links hover:bg-white transition-colors text-black px-4 p-2">
			{text}
		</button>
	)
}

export default Button
