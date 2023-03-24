import React from "react";
import QuarterBox from "@/componets/shared/QuarterBox";
const TrackLeft = () => {
  return (
    <div className="rounded-xl shadow-xl border border-teal-500 py-8 px-8 basis-8/12">
      <h4 className="text-teal-700 font-bold text-lg mt-4">
        Specialized Program
      </h4>
      <h2 className="text-xl font-bold">
        Web 3.0 (Blockchain) and Metaverse Specialization
      </h2>
      <p className="text-lg text-slate-600 mt-3">
        This Web 3.0 and Metaverse specialization focuses on developing
        full-stack Web 3.0 and Metaverse experiences for the next generation of
        the internet by specializing in building worlds that merge the best of
        cutting-edge decentralized distributed blockchains with 3D metaverse
        client experiences.
      </p>
      <button className="text-lg text-teal-700 mt-4 font-bold underline flex gap-x-1  items-baseline">
        Learn More
        <svg
          width="8"
          height="11"
          viewBox="0 0 8 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
            stroke="#00616C"
            stroke-width="2"
          />
        </svg>
      </button>
      <div className="flex gap-x-6 mt-8">
        <QuarterBox
          descrp="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13
                 and Cloud Development Kit (CDK) for Terraform"
          header="Quarter IV"
          numb={4}
          haveBorder={false}
        />
        <QuarterBox
          descrp="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs 
              using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
          header="Quarter V"
          numb={5}
          haveBorder={false}
        />
      </div>
    </div>
  );
};

export default TrackLeft;
