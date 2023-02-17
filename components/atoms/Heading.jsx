import React from "react";

export default function Heading({ children }) {
  return (
    <h3 className=" inline-block font-serif text-3xl uppercase border-y border-white py-6 px-12">
      {children}
    </h3>
  );
}
