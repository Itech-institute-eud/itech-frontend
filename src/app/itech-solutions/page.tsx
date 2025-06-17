import Button from '@/components/custom/button'
import Container from '@/components/custom/container'
import Description from '@/components/custom/description'
import Heading from '@/components/custom/heading'
import Marquee from '@/components/custom/marquee'
import ServiceCard from '@/components/custom/ServiceCard'
import Image from 'next/image'
import Link from 'next/link'

const services = [
	{
		title: 'Web Development',
		description: 'Custom web development solutions.',
		subTitle: 'Responsive Design',
		imagePath: '/images/Solution1.png',
	},
	{
		title: 'UI/UX Design',
		description: 'Creating intuitive and engaging interfaces.',
		subTitle: 'User Research',
		imagePath: '/images/Solution2.png',
	},
	{
		title: 'Cloud Solutions',
		description: 'Scalable and secure cloud services.',
		subTitle: 'Cloud Hosting',
		imagePath: '/images/Solution3.png',
	},
	{
		title: 'Mobile Development',
		description: 'Creating seamless mobile experiences.',
		subTitle: 'iOS & Android',
		imagePath: '/images/Solution4.png',
	},
]

const page = () => {
	return (
		<div>
			<Heading title={'Transform Your Business with Cutting-Edge IT Solutions'} />
			<div className="p-4 w-full flex items-center justify-center">
				<Image
					alt="ITech-Solutions"
					src={'/images/ITech-Solution.png'}
					height={500}
					width={800}
					layout="resposive"
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
			<div className="my-4 flex items-center justify-center">
				<Link href={'/contact'}>
					<Button type="link" text="Contact Us" />
				</Link>
			</div>
			<Heading title={'OUR TECH STACK'} />
			<Description text="we focus on emerging technologies for building high performing web and mobile products that can be securely deployed in the cloud" />
			<Marquee />
			<Container>
				<div className="flex flex-col md:flex-row items-center justify-center bg-black/50 p-10 rounded-xl gap-2.5">
					<div className="">
						<Image height={300} width={500} src={'/images/solutions.jpg'} alt="solutions" />
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
