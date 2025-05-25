'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'
import Container from './container'

const data: any = [
	{
		title: 'Students Enrolled',
		start: 9990,
		end: 10000,
		hasCountUp: true,
	},
	{
		title: 'Placed Students',
		num: '70%',
		hasCountUp: false,
	},
	{
		title: 'Certificates issued',
		start: 4950,
		end: 5000,
		hasCountUp: true,
	},
	{
		title: 'Success Rate',
		num: '100%',
		hasCountUp: false,
	},
]

const Numbers = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, amount: 0.2 })

	return (
		<Container className="my-5">
			<div
				ref={ref}
				className="w-full lg:w-[95%] h-[90px] lg:h-[181px] rounded-[30px] md:rounded-[35px] bg-white/30 backdrop-blur-lg border-white/30 shadow-lg mx-auto flex items-center justify-evenly border-[1px] border-b-primary-links"
			>
				{data.map((item: any, i: any) => (
					<div key={i} className="flex flex-col items-center justify-center">
						<span className="text-[16px] md:text-[20px] lg:text-[40px] font-bold text-center">
							{item.hasCountUp && isInView ? (
								<CountUp start={item.start} end={item.end} duration={4} />
							) : (
								item.num
							)}
							{item.hasCountUp && ' +'}
						</span>
						<p className="text-[12px] lg:text-lg text-center">{item.title}</p>
					</div>
				))}
			</div>
		</Container>
	)
}

export default Numbers
