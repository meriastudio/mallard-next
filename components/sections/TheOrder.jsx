import React from "react";
import Separator from "../atoms/Separator";

export default function TheOrder({ children, ...props }) {
  return (
    <section
      className=" bg-off-black bg-compound bg-cover bg-center py-12 lg:py-48 "
      {...props}
    >
      <div className="flex flex-col  space-y-12 w-full">
        <div className="flex flex-1  h-full  items-center w-full">
          <div className=" w-full  bg-opacity-80 text-center py-12 px-5 lg:p-12 space-y-6">
            {children}
          </div>
        </div>

        <Separator
          href="/#traits"
          className="block w-4/6 md:w-3/6 mx-auto mb-12"
        />
      </div>
    </section>
  );
}
