import Description from "@/components/custom/description";
import Heading from "@/components/custom/heading";
import VideoComponent from "@/components/custom/videoComponent";
import Card from "@/components/custom/card";

import ExploreBtn from "@/components/custom/exploreButtton";
import Numbers from "@/components/custom/numbers";
import Partners from "@/components/custom/parteners";
import Marquee from "@/components/custom/marquee";
import Faq from "@/components/custom/faq";

const data = [
  {
    title: "Diploma in Accounting",
    desc: "A diploma in accounting provides students with foundational knowledge in financial principles, preparing them for a successful career in finance and business.",
    path: "/images/Diploma in Accounting.png",
  },
  {
    title: "Digital Marketing",
    desc: "Explore the essentials of digital marketing, mastering strategies for online engagement, brand growth, and data-driven decision-making.",
    path: "/images/Digital Marketing.png",
  },
  {
    title: "Advance excel",
    desc: "Master Excel with our comprehensive course that caters to beginners and advanced users alike, emphasizing practical skills and real-world applications.",
    path: "/images/Advance excel.png",
  },
];

export default function Home() {
  return (
    <div className="bg-primary-forground">
      <VideoComponent path="videos/home page.mp4" />
      <div>
        <Heading title={"What We offer"} />
        <Description text="Explore a world of knowledge with i Tech, where diverse courses empower your future!" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-2">
          {data.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              desc={item.desc}
              path={item.path}
            />
          ))}
        </div>
        <ExploreBtn />
        <Numbers />
        <Heading title={"Our Premium Partners"} />
        <Marquee />
        <Faq />
      </div>
    </div>
  );
}
