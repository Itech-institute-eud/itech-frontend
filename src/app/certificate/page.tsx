import Container from "@/components/custom/container";
import Heading from "@/components/custom/heading";
import MonthFilter from "@/components/custom/MonthFilter";
import YearFilter from "@/components/custom/YearFilter";
import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <Container>
      <Heading title={"I-TECH CERTIFIED LIST"} />
      <Heading
        title={"BRANCH CERTIFIED & Military BATCH (PARA/MEG CENTER/ASC) "}
      />
      <div className="w-full flex items-center justify-center my-5">
        <YearFilter />
      </div>
      <div className="w-full flex items-center justify-center my-5">
        <MonthFilter />
      </div>
      <div className="max-w-[30%] mx-auto flex items-center justify-center my-5">
        <Input
          className="rounded-full bg-white"
          placeholder="Search by your certified name"
        />
      </div>
    </Container>
  );
};

export default page;
