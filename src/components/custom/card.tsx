import Image from "next/image";
import Container from "./container";

interface CardProps {
  title: string;
  desc: string;
  path: string;
}

const Card = ({ title, desc, path }: CardProps) => {
  return (
    <Container>
      <div className=" font-inter bg-white shadow-sm shadow-white">
        <div className="relative w-full h-56 md:h-64 lg:h-72">
          <Image alt={title} src={path} layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col flex-grow justify-between p-4">
          <h1 className="text-primary-heading text-xl font-bold text-center">
            {title}
          </h1>
          <p className="text-primary-heading text-center text-[10px] md:text-sm md:min-h-[70px]">
            {desc}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Card;
