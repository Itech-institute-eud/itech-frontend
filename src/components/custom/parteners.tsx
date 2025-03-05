import Image from "next/image";
import React from "react";

const data = [
  {
    title: "Arise Health",
    path: "/images/Arise Health.png",
  },
  {
    title: "Ephicient",
    path: "/images/Ephicient.png",
  },

  {
    title: "2020INC",
    path: "/images/2020INC.png",
  },
  {
    title: "THE PAAK",
    path: "/images/THE PAAK.png",
  },
  {
    title: "Pipelinx.co",
    path: "/images/Pipelinx.co.png",
  },
  {
    title: "TOOGETHER",
    path: "/images/TOOGETHER.png",
  },
];

const Partners = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="w-[80%] flex items-center justify-between">
        {data.map((item) => (
          <span key={item.title}>
            <Image
              src={item.path}
              alt={item.title}
              width={100}
              height={50}
              className=" p-1"
            />
          </span>
        ))}
        <span></span>
      </div>
    </div>
  );
};

export default Partners;
