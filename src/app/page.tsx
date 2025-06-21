import Description from '@/components/custom/description'
import Heading from '@/components/custom/heading'
import VideoComponent from '@/components/custom/videoComponent'
import Card from '@/components/custom/card'

import Numbers from '@/components/custom/numbers'
import Marquee from '@/components/custom/marquee'
import Faq from '@/components/custom/faq'
import Contact from '@/components/custom/contact'
import { cardsData, HomePageCards } from '@/data'
import Button from '@/components/custom/button'
import Link from 'next/link'
import CourseGrid from '@/components/custom/course-grid'

export default function Home() {
	return (
		<div className="bg-primary-forground">
			<VideoComponent path="videos/home page.mp4" />
			<div>
				<Heading title={'What We offer'} />
				<Description text="Step into a world of possibilities with I-Tech — where every course is a pathway to real-world success" />
				<CourseGrid courses={HomePageCards} />
				<Link href={'/courses'} className="flex items-center justify-center">
					<Button text="Explore more courses" type="link" />
				</Link>
				<Numbers />
				<Heading title={'Our Premium Partners'} />
				<Marquee />
				<Faq />
				<Contact />
			</div>
		</div>
	)
}
