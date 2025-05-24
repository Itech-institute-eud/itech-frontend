interface IInputProps {
	name: string
}

const Input = ({ name }: IInputProps) => {
	return (
		<input
			className="w-full md:max-w-[60%] text-black bg-white p-2 rounded-md outline-0"
			placeholder="Email"
			name={name}
		></input>
	)
}

export default Input
