import Image from 'next/image'
import Heading from './heading'
import Container from './container'
import Input from './input'
import Button from './button'
import Reveal from './reveal'

const Contact = () => {
	return (
		<Container className="flex border-2 flex-col lg:flex-row items-center justify-between text-white lg:max-w-[90%] mx-auto">
			<div className="hidden lg:flex lg:flex-1/2 p-5">
				<Image
					alt={'contact'}
					src={'/images/contactUs.png'}
					sizes="auto"
					objectFit="cover"
					width={400}
					height={400}
				/>
			</div>
			<Reveal>
				<div className="flex-1/2 bg-black/30 p-5 rounded-2xl shadow-md">
					<Heading className="text-start font-semibold" title={'Contact us'} />
					<div className="flex gap-5">
						<div className="flex flex-col text-sm">
							<h2 className="text-xl font-bold my-2">Visit us</h2>
							<p>2, JC Nagar Main Rd, Ganganagar, Bengaluru, Karnataka 560032</p>
						</div>
						<div>
							<h2 className="text-xl font-bold my-2">Contact Info</h2>
							<div className=" flex flex-col text-sm gap-1 text-start">
								<div className="flex items-center gap-2.5">
									<span className="font-extrabold">Email:</span>
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
						<Button type="button" text="Subscribe" />
					</div>
				</div>
			</Reveal>
		</Container>
	)
}

export default Contact
