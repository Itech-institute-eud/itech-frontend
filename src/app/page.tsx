import Description from "@/components/custom/description";
import Heading from "@/components/custom/heading";
import VideoComponent from "@/components/custom/videoComponent";

export default function Home() {
  return (
    <div className="bg-primary-forground">
    <VideoComponent path="videos/home page.mp4"/>
    <div>
      <Heading title={"What We offer"}/>
      <Description text="Explore a world of knowledge with i Tech, where diverse courses empower your future!"/>
      
    </div>
    </div>
  );
}




