import React from "react";
import Wrapper from "@/componets/shared/Wrapper";

const SpecializedTracks = () => {
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-10">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl text-slate-600">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className="mt-10">
          {/* Content Left */}
          <div className="rounded-xl shadow-xl border border-teal-500 py-8 px-8">
            <h4 className="text-teal-700 font-bold text-lg mt-4">
              Specialized Program
            </h4>
            <h2 className="text-xl font-bold">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h2>
            <p className="text-lg text-slate-600 mt-3">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
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
          </div>
          {/* Content Right */}
          <div></div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
