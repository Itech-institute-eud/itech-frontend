import Button from '@/components/custom/button'
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
				<Marquee />
			</div>
			<div className="my-4 flex items-center justify-center">
				<Link href={'/contact'}>
					<Button type='link' text="Contact Us" />
				</Link>
			</div>
			{/* <div>
          <Heading
            title={
              "TechSolutions transformed our business with their innovative solutions."
            }
          />
          <div className="flex items-center justify-center space-x-3 my-10">
            <div className="object-cover w-[50px]">
              <Image
                src={"/images/Solutions-Profile.png"}
                alt="profile"
                width={200}
                height={200}
              />
            </div>
            <div className="text-white">
              <h1>Maximilian Stone</h1>
              <p>CEO, Innovative Corp</p>
            </div>
          </div> 
        </div>*/}
		</div>
	)
}

export default page
