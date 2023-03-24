"use client";
{
  /* for Rerendering of the data using use State that can be used on client side so mentioned use client */
}
import { useState } from "react";
import Wrapper from "@/componets/shared/Wrapper";
import programsData from "@/data/ProgramData";
import Image from "next/image";
import TrackHeader from "@/componets/sub-sections/TrackHeader";
import QuarterBox from "@/componets/shared/QuarterBox";
const SpecializedTracks = () => {
  const [selectedItem, UpdataeSelectedItem] = useState("web3");
  const selectedItemData = programsData.find(
    (item) => selectedItem === item.slug
  );
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <TrackHeader />
        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-10 gap-y-4">
          {/* Content Left */}
          <div className="rounded-xl sticky top-24  self-start border border-teal-500 py-8 px-8 basis-8/12">
            <h4 className="text-teal-700 font-bold text-lg mt-4">
              Specialized Program
            </h4>
            <h2 className="text-2xl font-bold">{selectedItemData?.header}</h2>
            <p className="text-lg text-slate-600 mt-3">
              {selectedItemData?.description}
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
            <div className="flex flex-col  gap-7 mt-8 md:flex-row ">
              {selectedItemData?.quarters.map((item) => {
                return (
                  <QuarterBox
                    key={item.numb}
                    descrp={item.details}
                    header={item.header}
                    numb={item.numb}
                    haveBorder={false}
                  />
                );
              })}
            </div>
          </div>
          {/* Content Right */}
          <div className=" basis-4/12 py-6 px-4 space-y-4  rounded-xl bg-slate-100 ">
            {programsData.map((item) => {
              return (
                <div
                  onClick={() => UpdataeSelectedItem(item.slug)}
                  key={item.slug}
                  className="gap-x-4 flex items-center cursor-pointer "
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.header}
                      className="h-20 w-32 object-cover rounded-md hover:scale-105  "
                    />
                  </div>
                  <div>
                    <h4 className="text-primary font-medium">
                      Specialized Program
                    </h4>
                    <h3 className="text-md font-bold">{item.header}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
