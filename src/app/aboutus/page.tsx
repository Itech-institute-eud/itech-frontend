import Container from '@/components/custom/container'
import Description from '@/components/custom/description'
import Heading from '@/components/custom/heading'
import OtherBranch from '@/components/custom/other_branch'
import Image from 'next/image'

const page = () => {
	return (
		<Container>
			<Heading title={'About ITech'} />
			<div className="flex flex-col gap-5 object-fill">
				<img src="/images/aboutus.png" alt="aboutus" className="h-[250px] lg:h-[600px]" />
				<Heading title={'EMPOWERING FUTURES THROUGH TECHNOLOGY'} />
				<p className="text-white lg:text-lg text-sm text-start text-wrap flex-1/2">
					At I-Tech Institute of Computers, we believe that every individual has the potential to
					build a successful career in the world of technology. Established in 1997, our journey
					began with a simple mission: to provide quality, industry-relevant IT education that
					transforms aspirations into achievements.
				</p>
				<p className="text-white lg:text-lg text-sm text-start text-wrap flex-1/2">
					transforms aspirations into achievements. With over 25 years of training excellence, we
					have evolved into a leading ISO 9001:2015 certified and IAF-verified institution,
					committed to delivering internationally benchmarked standards in technical education. Our
					programs are designed to meet the ever-changing demands of the digital world, offering
					hands-on experience and real-world application.
				</p>
				<p className="text-white lg:text-lg text-sm text-start text-wrap flex-1/2">
					Whether it’s programming, data analytics, web development, or AI—our focus remains on
					practical skills, career readiness, and personal growth. Backed by expert trainers,
					corporate collaborations, and a vision to personalize learning journeys, I-Tech continues
					to upskill the next generation of tech professionals with precision, purpose, and passion.
				</p>
			</div>
			<div className="bg-black/30 p-4 rounded-2xl shadow-lg my-5">
				<Heading title={'DIRECTOR’S DESK'} className="mb-2" />
				<div className="flex flex-col md:flex-row  justify-center md:gap-5 items-center">
					<div className="relative lg:w-[621px] w-[300px] lg:h-[504px] h-[300px]">
						<Image src={'/images/director.png'} alt="director" layout="fill" objectFit="cover" />
					</div>

					<div className="flex flex-col items-center w-full lg:w-[50%] lg:h-[452px] h-fit gap-3 my-5">
						<h1 className="text-white text-lg lg:text-3xl font-bold text-center">
							MUSHTAQ AHMED – Director
						</h1>
						<p className="text-white text-lg">
							As the founder and Director of I-Tech Institute of Computers, MUSHTAQ AHMED has been
							the driving force behind the institute's success since its inception. With over two
							decades of experience in technology and education, His visionary leadership has
							transformed I-Tech into one of the most respected IT training institutes in Bengaluru.
							Under his leadership, I-Tech has not only expanded its range of courses but also
							gained a reputation for delivering excellence through its industry-oriented programs.
						</p>
					</div>
				</div>
			</div>

			<div>
				<Heading title={'Why Choose Us'} />
				<Description text="At I-Tech Institute of Computers, we take pride in being ISO 9001:2015 certified and IAF (International Accreditation Forum) verified, ensuring that we meet the highest global standards in education and training services." />
				<div className="flex flex-col md:flex-row items-center justify-between gap-5 p-4 max-w-[70%]m-auto">
					<Image src={'/images/IAS.png'} alt="IAS" width={150} height={150} objectFit="cover" />
					<Image src={'/images/ISO.png'} alt="ISO" width={150} height={150} objectFit="cover" />
					<Image
						src={'/images/25-years.jpeg'}
						alt="IAS"
						width={100}
						height={100}
						objectFit="cover"
					/>
					<Image src={'/images/IAF.png'} alt="IAF" width={150} height={150} objectFit="cover" />
				</div>
			</div>

			<div className=" flex flex-col md:flex-row justify-between items-center my-4">
				<OtherBranch
					title="I-Tech RT Nagar Branch (Main Branch)"
					address="2, JC Nagar Main Rd, Ganganagar, RT nagar Bengaluru, Karnataka 560032"
					phone={['+91 9845193425', '+91 7892537944']}
				/>
				<OtherBranch
					title="I-Tech CHIKKABANAVARA Branch"
					address="1st floor, opp to sri chamundeshwari petrol bunk, chikkabanavara, hesaraghatta main road, Bangalore - 560090 "
					phone={['+91 9845751732', '+91 7019166910']}
				/>
			</div>
		</Container>
	)
}

export default page
