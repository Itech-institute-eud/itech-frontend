import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

import Container from './container'
import Heading from './heading'
import { faqs } from '@/data'
import Reveal from './reveal'

const Faq = () => {
	return (
		<Container className="h-full w-full flex justify-center items-center">
			<div className="flex flex-col items-center justify-center  w-full bg-black/30 py-4 px-5 md:px-10 rounded-2xl shadow-lg">
				<div>
					<Heading title={'Commonly asked questions'} />
				</div>
				<div className="bg-white/50 w-full lg:w-[50%] p-4 rounded-lg border-[1px] ">
					<Accordion type="single" collapsible className="text-white w-full p-4">
						{faqs.map((item, i) => (
							<Reveal key={i}>
								<AccordionItem value={`item-${i + 1}`}>
									<AccordionTrigger>{item.question}</AccordionTrigger>
									<AccordionContent>{item.answer}</AccordionContent>
								</AccordionItem>
							</Reveal>
						))}
					</Accordion>
				</div>
			</div>
		</Container>
	)
}

export default Faq
