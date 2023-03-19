import Wrapper from "@/componets/shared/Wrapper";
import Image from "next/image";
import HeroImage from "@/assests/images/hero-image.png";

import { useRouter } from "next/router";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex items-center">
          {/* Left */}
          <div className="flex-1 mt-1">
            <h4 className="text-teal-800 font-bold text-lg">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-5xl font-bold text-black leading-14">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-5 text-lg text-slate-500">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="mt-5 text-lg text-slate-500">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <button className="mt-8 bg-teal-800 rounded-full py-3 px-6 text-lg font-semibold text-white">
              <a href="https://www.piaic.org/" target="_blank">
                {"Learn More"}
              </a>
            </button>
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
