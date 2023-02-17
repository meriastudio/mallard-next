import React from "react";
import Separator from "../atoms/Separator";

export default function Roadmap({ children, ...props }) {
  return (
    <section
      className="xl:container   grid-cols-12 items-stretch space-y-12 "
      {...props}
    >
      <div className="col-span-12 lg:col-span-6 flex flex-col justify-between">
        <div className="flex-1 flex text-center items-center">
          <div className="w-full space-y-12 lg:space-y-24">{children}</div>
        </div>
      </div>
      <img src="/roadmap.png" alt="Roadmap" className="mb-6 hidden lg:block" />{" "}
      <img
        src="/roadmapMobile.png"
        alt="Roadmap"
        className="mb-6  w-full md:w-5/6  mx-auto lg:hidden"
      />
      <div className="col-span-6 ">
        <Separator
          href="#benefit"
          className=" block w-4/6 md:w-3/6 mx-auto mb-12 w-full"
        />
      </div>
    </section>
  );
}
