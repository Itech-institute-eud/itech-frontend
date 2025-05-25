interface IButtonProps {
	text: string
	type: 'link' | 'button'
}

const Button = ({ text, type }: IButtonProps) => {
	return (
		<button
			className={` ${
				type === 'button'
					? 'bg-primary-links hover:bg-white text-black border-none'
					: 'bg-black text-white hover:bg-white hover:text-black'
			} rounded-md  transition-colors cursor-pointer border-[1px] border-black px-4 p-2`}
		>
			{text}
		</button>
	)
}

export default Button
