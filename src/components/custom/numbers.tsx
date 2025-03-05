"use client";

import CountUp from "react-countup";
import Container from "./container";

const data = [
  {
    title: "No.of Students enrolled",
    num: (
      <span>
        {" "}
        <CountUp start={9990} end={10000} duration={4} /> +
      </span>
    ),
  },
  {
    title: "successfully placed students",
    num: (
      <div>
        <span>70%</span>
      </div>
    ),
  },
  {
    title: "Certified Retired Military Officers",

    num: (
      <span>
        <CountUp start={4950} end={5000} duration={4} /> +
      </span>
    ),
  },
  {
    title: "Success Rate",
    num: <span>100%</span>,
  },
];

const Numbers = () => {
  return (
    <Container className="my-5">
      <div className="w-full lg:w-[95%] h-[100px]  lg:h-[181px] rounded-[50px] bg-secondary-forground  mx-auto flex items-center justify-evenly">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <span className="text-[16px] md:text-[20px] lg:text-[40px]  font-bold text-center">
              {item.num}
            </span>
            <p className="text-[8px] md:text-[10px] lg:text-lg text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Numbers;
