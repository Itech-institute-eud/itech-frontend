import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Container from "./container";
import Heading from "./heading";

const questions = [
  {
    question: "Why should i join i-tech institute of computers?",
    answer:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan leo a pretium gravida. Vivamus rutrum imperdiet dolor, luctus tincidunt mi. Vivamus et blandit nibh. Pellentesque viverra felis nec lacinia iaculis. Suspendisse non tempor ipsum. Phasellus mollis pharetra nulla, et tincidunt nisl porttitor in",
  },
  {
    question: "Are you looking for exciting offers?",
    answer:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan leo a pretium gravida. Vivamus rutrum imperdiet dolor, luctus tincidunt mi. Vivamus et blandit nibh. Pellentesque viverra felis nec lacinia iaculis. Suspendisse non tempor ipsum. Phasellus mollis pharetra nulla, et tincidunt nisl porttitor in ",
  },
  {
    question:
      "What companies are invited for placements and of what categories",
    answer:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan leo a pretium gravida. Vivamus rutrum imperdiet dolor, luctus tincidunt mi. Vivamus et blandit nibh. Pellentesque viverra felis nec lacinia iaculis. Suspendisse non tempor ipsum. Phasellus mollis pharetra nulla, et tincidunt nisl porttitor in ",
  },
  {
    question: "Why is BRIX Templates the best Webflow agency?",
    answer:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan leo a pretium gravida. Vivamus rutrum imperdiet dolor, luctus tincidunt mi. Vivamus et blandit nibh. Pellentesque viverra felis nec lacinia iaculis. Suspendisse non tempor ipsum. Phasellus mollis pharetra nulla, et tincidunt nisl porttitor in ",
  },
  {
    question: "When was Webflow officially launched?",
    answer:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan leo a pretium gravida. Vivamus rutrum imperdiet dolor, luctus tincidunt mi. Vivamus et blandit nibh. Pellentesque viverra felis nec lacinia iaculis. Suspendisse non tempor ipsum. Phasellus mollis pharetra nulla, et tincidunt nisl porttitor in ",
  },
  {
    question: "How do you integrate Jetboost with Webflow?",
    answer:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan leo a pretium gravida. Vivamus rutrum imperdiet dolor, luctus tincidunt mi. Vivamus et blandit nibh. Pellentesque viverra felis nec lacinia iaculis. Suspendisse non tempor ipsum. Phasellus mollis pharetra nulla, et tincidunt nisl porttitor in ",
  },
];

const Faq = () => {
  return (
    <Container className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center  w-full bg-black/50 py-4 px-5 md:px-10 rounded-2xl">
        <div>
          <Heading title={"Commonly asked questions"} />
        </div>
        <div className="bg-white/50 w-full lg:w-[50%] p-4 rounded-lg border-[1px] shadow-lg">
          <Accordion
            type="single"
            collapsible
            className="text-white w-full p-4"
          >
            {questions.map((item, i) => (
              <AccordionItem key={i} value={`item-${i + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Container>
  );
};

export default Faq;
