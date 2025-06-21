import Button from '@/components/custom/button'
import Container from '@/components/custom/container'
import Description from '@/components/custom/description'
import Heading from '@/components/custom/heading'
import Marquee from '@/components/custom/marquee'
import ServiceCard from '@/components/custom/ServiceCard'
import { services } from '@/data'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
	return (
		<div>
			<Heading title={'Transform Your Business with Cutting-Edge IT Solutions'} />
			<div className="p-4 w-full flex items-center justify-center">
				<Image
					alt="ITech-Solutions"
					src={'/images/ITech-Solution.jpg'}
					height={1000}
					width={1300}
					layout="resposive"
					className="opacity-80"
				/>
			</div>
			<div>
				<Heading title={'Our Services'} />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 p-4">
				{services.map((item, i) => (
					<ServiceCard
						title={item.title}
						description={item.description}
						subTitle={item.subTitle}
						imagePath={item.imagePath}
						key={i}
					/>
				))}
			</div>
			<div>
				<Heading title={'Trusted by Leading Companies'} />
			</div>
			<Marquee />
			<div className="my-4 flex items-center justify-center">
				<Link href={'/contact'}>
					<Button type="link" text="Contact Us" />
				</Link>
			</div>
			<Heading title={'OUR TECH STACK'} />
			<Description text="we focus on emerging technologies for building high performing web and mobile products that can be securely deployed in the cloud" />
			<div className="flex items-center flex-col md:flex-row justify-evenly w-60% mx-auto my-3">
				<Image height={100} width={100} src={'/images/tech-stack/js.png'} alt="js" />
				<Image height={100} width={100} src={'/images/tech-stack/html.png'} alt="nodejs" />
				<Image height={100} width={100} src={'/images/tech-stack/go.png'} alt="js" />
				<Image height={100} width={100} src={'/images/tech-stack/python.png'} alt="js" />
				<Image height={100} width={100} src={'/images/tech-stack/css.png'} alt="js" />
			</div>
			<Container>
				<div className="w-fit m-auto flex flex-col md:flex-row items-center justify-center bg-white/20 p-5 rounded-2xl gap-2.5">
					<div>
						<Image height={500} width={500} src={'/images/solutions.png'} alt="solutions" />
					</div>
					<div className=" flex flex-col items-center justify-center">
						<Heading title={'Lets bring your technical imagination to reality'} />
						<a href="tel:+91-7892537944" className="text-black">
							<Button text="Book a call" type="link" />
						</a>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default page
