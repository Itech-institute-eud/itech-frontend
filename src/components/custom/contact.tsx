import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Heading from "./heading";
import Container from "./container";

const Contact = () => {
  return (
    <Container className="flex flex-col lg:flex-row items-center justify-between text-white lg:max-w-[90%] font-inter">
      <div className="hidden lg:flex lg:flex-1/2 p-5">
        <div className="relative w-full h-56 md:h-64 lg:h-72">
          <Image
            alt={"contact"}
            src={"/images/ContactUs.png"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex-1/2 bg-black/50 p-5 rounded-2xl shadow-md">
        <Heading className="text-start font-semibold" title={"Contact us"} />
        <div className="flex gap-5">
          <div className=" flex flex-col text-sm">
            <h2 className="text-xl font-bold">Visit us</h2>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Contact Info</h2>
            <div className=" flex flex-col text-sm">
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
              <p>info@i-techinstitute.com</p>
              <p>+91-9845193425</p>
            </div>
          </div>
        </div>

        <div className="flex w-full mg:w-[80%] gap-2 my-3">
          <Input
            className="w-full md:max-w-[60%] text-black bg-white"
            placeholder="Email"
          />
          <Button className="bg-primary-links text-black w-[30%]">
            Subscribe
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
