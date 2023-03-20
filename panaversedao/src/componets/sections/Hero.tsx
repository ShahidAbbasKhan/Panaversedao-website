import Image from "next/image";
import HeroImage from "@/assests/images/hero-image.png";
//Components
import Wrapper from "@/componets/shared/Wrapper";
import Button from "@/componets/shared/Button";
import { useRouter } from "next/router";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex  flex-col md:flex-row items-center">
          {/* Left */}
          <div className="flex-1 ml-1 ">
            <h4 className="text-[#00616C] font-bold text-lg mt-4 mb-2">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-14">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-5 text-lg text-slate-500 max-w-xl">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="mt-5 text-lg text-slate-500 max-w-xl">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-5">
              <Button text={"Enroll Now"} />
            </div>
          </div>
          {/* Right */}
          <div className="flex-1">
            <Image src={HeroImage} alt={"Hero Image"} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
