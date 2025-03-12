import Container from "@/components/custom/container";
import Description from "@/components/custom/description";
import Heading from "@/components/custom/heading";
import OtherBranch from "@/components/custom/other_branch";
import Image from "next/image";

const page = () => {
  return (
    <Container>
      <div className=" flex flex-col gap-5">
        <img src="/images/aboutus.png" alt="aboutus" className="lg:h-[600px]" />
        <p className="text-white lg:text-lg text-sm text-start text-wrap flex-1/2">
          Established in 1997, I-Tech Institute of Computers is a premier IT
          training organization with over 25 years of excellence in providing
          top-notch education in technology and computing. Renowned for its
          expert trainers, certified engineers with extensive industry
          experience, I-Tech is committed to creating highly skilled
          professionals who meet the ever-growing demands of the IT industry.
          With a mission to create skilled professionals who meet the IT
          industry's growing demands, I-Tech offers a wide range of certified
          courses, including programming, web development, Artificial
          Intelligence, Data Analytics, and UI/UX Designing, alongside advanced
          training in Networking, Cisco, VMware, and Citrix. With a strong focus
          on practical learning through real-time projects and an emphasis on
          accessibility with affordable pricing, we empower individuals to
          thrive in the digital era. Whether you’re a beginner or a
          professional, I-Tech equips you with the skills to succeed in a
          rapidly evolving tech landscape.
        </p>
      </div>
      <div className="bg-black/30 p-4 rounded-2xl shadow-lg my-5 border-[1px] border-primary-links">
        <Heading title={"DIRECTOR’S DESK"} className="mb-2" />
        <div className="flex flex-col md:flex-row  justify-center md:gap-5 items-center">
          <div className="relative lg:w-[621px] w-[300px] lg:h-[504px] h-[300px]">
            <Image
              src={"/images/director.png"}
              alt="director"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="flex flex-col items-center w-full lg:w-[50%] lg:h-[452px] h-fit gap-3 my-5">
            <h1 className="text-white text-lg lg:text-3xl font-bold text-center">
              MUSHTAQ AHMED – Director
            </h1>
            <p className="text-white text-center text-sm lg:text-lg">
              As the founder and Director of I-Tech Institute of Computers,
              MUSHTAQ AHMED has been the driving force behind the institute's
              success since its inception. With over two decades of experience
              in technology and education, His visionary leadership has
              transformed I-Tech into one of the most respected IT training
              institutes in Bengaluru. Under his leadership, I-Tech has not only
              expanded its range of courses but also gained a reputation for
              delivering excellence through its industry-oriented programs.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Heading title={"Why Choose Us"} />
        <Description text="At I-Tech Institute of Computers, we take pride in being ISO 9001:2015 certified and IAF (International Accreditation Forum) verified, ensuring that we meet the highest global standards in education and training services." />
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 p-4">
          <Image
            src={"/images/IAS.png"}
            alt="IAS"
            width={150}
            height={150}
            objectFit="cover"
          />
          <Image
            src={"/images/ISO.png"}
            alt="ISO"
            width={150}
            height={150}
            objectFit="cover"
          />
          <Image
            src={"/images/IAF.png"}
            alt="IAF"
            width={150}
            height={150}
            objectFit="cover"
          />
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-between items-center my-4">
        <OtherBranch title="Main Branch" />
        <OtherBranch title="Other Branch" />
      </div>
    </Container>
  );
};

export default page;
