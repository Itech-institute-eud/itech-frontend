import Image from 'next/image'
import Heading from './heading'
import Container from './container'
import Input from './input'
import Button from './button'

const Contact = () => {
	return (
		<Container className="flex flex-col lg:flex-row items-center justify-between text-white lg:max-w-[90%]">
			<div className="hidden lg:flex lg:flex-1/2 p-5">
				<div className="relative w-full h-56 md:h-64 lg:h-72">
					<Image
						alt={'contact'}
						src={'/images/contactUs.jpeg'}
						sizes="auto"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>
			<div className="flex-1/2 bg-black/30 p-5 rounded-2xl shadow-md">
				<Heading className="text-start font-semibold" title={'Contact us'} />
				<div className="flex gap-5">
					<div className="flex flex-col text-sm">
						<h2 className="text-xl font-bold my-2">Visit us</h2>
						<p>JC Nagar Main Rd, Ganganagar, Bengaluru, Karnataka 560032</p>
					</div>
					<div>
						<h2 className="text-xl font-bold my-2">Contact Info</h2>
						<div className=" flex flex-col text-sm gap-1 text-start">
							<div className="flex items-center gap-2.5">
								<span className="font-extrabold">Email Us:</span>
								<a href="mailto:info@itechinstitute.com" className="text-black">
									info@itechinstitute.com
								</a>
							</div>
							<div className="flex items-center gap-2.5">
								<span className="font-extrabold">Phone:</span>
								<a href="tel:+91-9845193425" className="text-black">
									+91-9845193425
								</a>
							</div>
							<div className="flex items-center gap-2.5">
								<span className="font-extrabold">Phone:</span>
								<a href="tel:+91-7892537944" className="text-black">
									+91-7892537944
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="flex w-full mg:w-[80%] gap-2 my-3">
					<Input name="email" />
					<Button text='Subscribe'/>
				</div>
			</div>
		</Container>
	)
}

export default Contact
