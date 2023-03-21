import React from "react";
import Wrapper from "@/componets/shared/Wrapper";
import Button from "@/componets/shared/Button";
import QuarterBox from "@/componets/shared/QuarterBox";

const CoreTracks = () => {
  const heading = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="mt-14 lg:mt-28">
      <Wrapper>
        {/* Content */}
        <div className="flex  ml-1 max-w-xl">
          <div>
            <h4 className="text-teal-700 font-bold text-lg mt-4 ">
              Program of Studies
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-10 whitespace-pre-line">
              {heading}
            </h2>

            <p className="mt-3 text-xl text-slate-500">
              Every participant of the program will start by completing the
              following three core courses:
            </p>
            <div className="mt-6">
              <Button text={"Learn More"} />
            </div>
          </div>
        </div>

        {/* Boxes */}
        <div className="flex gap-10 my-8">
          <QuarterBox
            header="Quarter I"
            descrp="CS-101: Object-Oriented Programming using TypeScript"
            numb={1}
          />
          <QuarterBox
            header="Quarter II"
            descrp="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and
             APIs using Next.js 13
             and Cloud Development Kit (CDK) for Terraform"
            numb={2}
          />
          <QuarterBox
            header="Quarter III"
            descrp="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
            numb={3}
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
