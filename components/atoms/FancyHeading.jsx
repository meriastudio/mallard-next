import React from "react";

export default function FancyHeading({ children }) {
  return (
    <div className="border-y border-white py-2 text-center">
      <h3 className="font-serif text-3xl uppercase border-y-2 border-white p-6">
        {children}
      </h3>
    </div>
  );
}
