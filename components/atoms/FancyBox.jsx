import React from "react";

export default function FancyBox({ className, padding, children }) {
  return (
    <div className={`border border-white p-2 ${className}`}>
      <div
        className={`flex justify-center items-center border-2 border-white py-8 px-4 sm:p-8 ${
          padding ? "" : "lg:py-24 xl:px-20"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

FancyBox.defaultProps = {
  className: "",
};
