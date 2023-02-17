import React from "react";
import Carousel from "../atoms/Carousel";
import Separator from "../atoms/Separator";

export default function Traits({ children, ...props }) {
  const images = [
    "/example1.png",
    "/example2.png",
    "/example3.png",
    "/example4.png",
    "/example5.png",
    "/example6.png",
    "/example7.png",
    "/example8.png",
    "/example9.png",
    "/example10.png",
    "/example11.png",
    "/example12.png",
    "/example13.png",
    "/example14.png",
    "/example15.png",
    "/example16.png",
    // duplicate so it slides more
    "/example1.png",
    "/example2.png",
    "/example3.png",
    "/example4.png",
    "/example5.png",
    "/example6.png",
    "/example7.png",
    "/example8.png",
    "/example9.png",
    "/example10.png",
    "/example11.png",
    "/example12.png",
    "/example13.png",
    "/example14.png",
    "/example15.png",
    "/example16.png",
  ];

  return (
    <section
      className="grid-rows-[1fr_auto] pb-12 overflow-x-hidden py-12 lg:pt-32"
      {...props}
    >
      <div className="flex flex-col items-center xl:container px-6 xl-px-10 lg:grid grid-cols-12 lg:items-stretch">
        <div className="order-2 lg:order-1 lg:col-span-9 lg:pr-12 lg:-mb-24">
          <img src="/traits.png" alt="Traits" className="hidden lg:block" />

          <img
            src="/traits-mobile.png"
            alt="Traits"
            className="lg:hidden w-full"
          />
        </div>
        <div className="order-1 lg:order-2 pb-12 lg:pb-0 lg:col-span-3 flex flex-col justify-between">
          <div className="flex-1 flex items-center">
            <div className="w-full">{children}</div>
          </div>

          <Separator
            href="/#roadmap"
            className=" w-4/6 md:w-3/6 lg:w-full mx-auto mb-12 hidden lg:block"
          />
        </div>
      </div>

      <div className="flex space-x-3 py-6 lg:py-32">
        <Carousel images={images} />
      </div>
      <Separator
        href="/#roadmap"
        className=" w-4/6 md:w-3/6 lg:w-full mx-auto mb-12  lg:hidden"
      />
    </section>
  );
}
