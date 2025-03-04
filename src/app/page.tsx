import Description from "@/components/custom/description";
import Heading from "@/components/custom/heading";
import VideoComponent from "@/components/custom/videoComponent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="bg-primary-forground">
      <VideoComponent path="videos/home page.mp4" />
      <div>
        <Heading title={"What We offer"} />
        <Description text="Explore a world of knowledge with i Tech, where diverse courses empower your future!" />
        <div className=" flex w-full items-center justify-between">
          {/* TODO */}
          <h1>CARD</h1>
          <h1>CARD</h1>
          <h1>CARD</h1>
        </div>
        {/* <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
      </div>
    </div>
  );
}
