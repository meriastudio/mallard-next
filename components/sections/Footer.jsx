import React from "react";
import FancyBox from "../atoms/FancyBox";
import Cardano from "../../icons/Cardano";
import { invitiationPolicyId, mallardPolicyId } from "../../consts";

export default function Footer({ children, ...props }) {
  return (
    <section
      className=" bg-off-black bg-bedrock bg-cover bg-center px-2 py-32 pb-10"
      {...props}
    >
      <div className=" px-10 lg:px-0 flex flex-col flex-1 xl:container pb-32 h-full lg:grid grid-cols-12 items-center justify-center space-y-12">
        <FancyBox className="col-span-8 col-start-3 w-full py-2" padding="px-2">
          <h2 className="font-serif text-lg lg:text-2xl text-center uppercase drop-shadow-md">
            ARE YOU READY TO BE REBORN?
          </h2>
        </FancyBox>
      </div>
      <div className="flex flex-col items-center ">
        <p className=" break-all py-3 lg:py-1 flex flex-col lg:flex-row justify-center items-center">
          <strong className="uppercase tracking-wide font-serif text-md sm:text-xl ">
            Invitation letter policy ID:{" "}
          </strong>{" "}
          <span className="text-sm text-center  py-2 lg:py-0 tracking-wide lg:text-xl">
            {invitiationPolicyId}
          </span>
        </p>
        <p className="break-all  py-3 lg:py-1 flex flex-col lg:flex-row justify-center items-center">
          <strong className="uppercase tracking-wide font-serif text-md sm:text-xl">
            MALLARD DUCK POLICY ID:
          </strong>
          <span className="text-xs text-center  py-2 lg:py-0 lg:text-xl">
            {" "}
            {mallardPolicyId}
          </span>
        </p>
        <div className="lg:container pt-16 ">
          <div className="  space-x-4 text-center flex justify-center items-center w-full">
            <p className=" md:m-0 text-lg lg:text-2xl">Powered by</p>

            <Cardano className="w-40 sm:w-56 lg:w-80 " />
          </div>
        </div>
      </div>
    </section>
  );
}
