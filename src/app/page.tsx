import Description from '@/components/custom/description'
import Heading from '@/components/custom/heading'
import VideoComponent from '@/components/custom/videoComponent'
import Card from '@/components/custom/card'

import ExploreBtn from '@/components/custom/exploreButtton'
import Numbers from '@/components/custom/numbers'
import Marquee from '@/components/custom/marquee'
import Faq from '@/components/custom/faq'
import Contact from '@/components/custom/contact'
import { cardsData } from '@/data'

export default function Home() {
	return (
		<div className="bg-primary-forground">
			<VideoComponent path="videos/home page.mp4" />
			<div>
				<Heading title={'What We offer'} />
				<Description
					text="Step into a world of possibilities with I-Tech — where every course is a pathway to real-world success"
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-2">
					{cardsData.map((item, i) => (
						<Card key={i} title={item.title} desc={item.desc} path={item.path} />
					))}
				</div>
				<ExploreBtn />
				<Numbers />
				<Heading title={'Our Premium Partners'} />
				<Marquee />
				<Faq />
				<Contact />
			</div>
		</div>
	)
}
