import Container from "@/components/custom/container";
import CustomInput from "@/components/custom/CustomInput";
import CustomRadio from "@/components/custom/CustomRadio";
import CustomTextArea from "@/components/custom/CustomTextArea";
import Description from "@/components/custom/description";
import Heading from "@/components/custom/heading";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <Container>
      <div>
        <Heading title={"Contact Us"} />
        <Description text="Any question or remarks? Just write us a message!" />
      </div>
      <div className="bg-black flex flex-col lg:flex-row h-fit p-4 rounded-xl md:gap-10 shadow-xl">
        {/* LEFT SIZE */}
        <div className="flex-1/4 text-center text-white bg-primary-heading rounded-xl py-10 relative ">
          <h1 className="text-xl lg:text-2xl font-semibold">
            Contact Information
          </h1>
          <p className="text-[10px] lg:text-sm">
            Say something to start a live chat!
          </p>
          <div className="absolute right-8 bottom-4  lg:bottom-15 lg:right-30 w-15 h-15 lg:w-50  lg:h-50 z-20">
            <Image src="/images/Full-Circle.png" alt="full-circle" fill />
          </div>
          <div className="absolute  bottom-0 right-0 w-15 h-15 lg:w-50 lg:h-50">
            <Image src="/images/Half-Circle.png" alt="full-circle" fill />
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex-1/3">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-5 p-2">
              <CustomInput title="First Name" />
              <CustomInput title="Last Name" />
              <CustomInput title="Email" />
              <CustomInput title="Phone Number" />
            </div>
            <div className="mt-5">
              <h1 className="text-primary-links">Select Subject?</h1>
              <div className="flex gap-3 items-center">
                <CustomRadio />
                <CustomRadio />
                <CustomRadio />
              </div>
            </div>

            <CustomTextArea />
            <div className="my-3 flex justify-end">
              <Button
                type="submit"
                size={"lg"}
                className="border bg-primary-heading text-white hover: border-primary-heading"
              >
                Submit <MoveRight />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default page;
