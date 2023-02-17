import React from "react";
import Separator from "../atoms/Separator";
import FancyBox from "../atoms/FancyBox";
import Logo from "../../icons/Logo";

export default function Banner({ children }) {
  return (
    <section className="lg:min-h-screen  lg:pt-header bg-off-black bg-stone bg-cover bg-center relative">
      <div className="flex flex-col py-32 lg:pt-12  lg:pb-0 lg:min-h-banner space-y-12">
        <div className="flex flex-col flex-1 md:pb-16 px-4  sm:container  h-full lg:grid grid-cols-12 items-center justify-center space-y-12">
          <Logo className="w-44 lg:hidden" />

          <FancyBox className="col-span-8 col-start-3 w-full">
            {children}
          </FancyBox>
        </div>

        <div className="container grid gap-12 grid-cols-12 lg:grid-cols-12 items-end">
          <div className="col-span-5 sm:col-span-3 skeletonLeft">
            <img src="/skulls.png" alt="Skulls" className="w-full -scale-x-1" />
          </div>

          <div className="sm:col-span-6 mb-12 heroSeperator">
            <Separator href="/#order" />
          </div>
          <div className="col-span-5 sm:col-span-3 skeletonRight ">
            <img src="/skulls.png" alt="Skulls" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
