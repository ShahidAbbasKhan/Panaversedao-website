"use client";
{
  /* for Rerendering of the data using use State that can be used on client side so mentioned use client */
}
import { useState } from "react";
import Wrapper from "@/componets/shared/Wrapper";
import programsData from "@/data/ProgramData";
import Image from "next/image";
import TrackHeader from "@/componets/sub-sections/TrackHeader";
import TrackLeft from "@/componets/sub-sections/TrackLeft";
const SpecializedTracks = () => {
  const [selectedItem, UpdataeSelectedItem] = useState("wmd");
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <TrackHeader />
        <div className="mt-10 flex gap-x-10 gap-y-4">
          {/* Content Left */}
          <TrackLeft />
          {/* Content Right */}
          <div className=" basis-4/12 py-6 px-4 space-y-3  rounded-xl bg-slate-100 ">
            {programsData.map((item) => {
              return (
                <div
                  key={item.slug}
                  className="gap-x-4 flex items-center cursor-pointer "
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.header}
                      className="h-20 w-32 object-cover rounded-md "
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
