import React from "react";
import Separator from "../atoms/Separator";

export default function Benefits({ children, ...props }) {
  const data = [
    {
      img: "/altars.png",
      title: "THE ALTAR",
      text: "The Altar will be powered by 25% of all The Mallard Order Ducks royalties. Once fully powered The Order will commence The Ritual of Equal Exchange. The Altar is a 0% fee CNFT lending program completely sponsored by The Mallard Order.",
    },
    {
      img: "/tools.png",
      title: "CUSTOM TOOLS",
      text: "Members gain direct access to the Order’s custom-built tools designed to cater to growth in the CNFT space.",
    },
    {
      img: "/member.png",
      title: "MEMBERS-ONLY MEMORABILIA",
      text: "Members gain access to custom regalia and memorabilia designed in-house by The Mallard Order. Some lucky regalia owners will find secrets hidden within their packages.",
    },
    {
      img: "/giveaways.png",
      title: "GIVEAWAYS, RAFFLES & MORE",
      text: "Members will take part in offerings from The Mallard Order such as ADA giveaways, Bluechip Raffles, granted access into special game nights, puzzles, scavenger hunts, and other events.",
    },
  ];
  return (
    <section
      className=" xl:container l grid-cols-12 items-stretch space-y-12 py-12 lg:py-32"
      {...props}
    >
      <div className="col-span-6 flex flex-col justify-between">
        <div className="flex-1 flex text-center items-center">
          <div className="w-full space-y-12 lg:space-y-24">{children}</div>
        </div>
      </div>
      <div className="col-span-6">
        <img
          src="/benefits.png"
          alt="Roadmap"
          className="mb-6 hidden lg:block "
        />{" "}
        <img
          src="/invitationHolder.png"
          alt="Roadmap"
          className="mb-6  hidden lg:block"
        />
      </div>
      <div className="lg:hidden   sm:grid  sm:grid-cols-8 md:grid-cols-9 gap-6 px-5 sm:px-12">
        {data.map((el, i) => (
          <div
            key={i}
            className=" flex flex-col items-center sm:col-span-4 md:col-span-3 mt-12 mt-sm:0 "
          >
            <img src={el.img} alt="#" className="" />
            <div className="border-bTitle border-b-2 my-6">
              <h1 className=" text-center text-bTitle font-serif font-bold text-2xl md:text-3xl   ">
                {el.title}
              </h1>
            </div>
            <p className=" text-white text-md sm:text-lg leading-8 text-center">
              {el.text}
            </p>
          </div>
        ))}
      </div>{" "}
      <Separator href="#team" className=" block w-4/6 md:w-3/6 mx-auto mb-12" />
    </section>
  );
}
