import React, { useState } from "react";
import Header from "./Header";
import MobileNav from "./MobileNav";

export default function Main({ children }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <div className={`${mobileNavOpen ? "blur" : ""}`}>
        <Header onOpen={() => setMobileNavOpen(true)} />

        <div>{children}</div>
      </div>

      {mobileNavOpen && (
        <MobileNav
          setMobileNavOpen={setMobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
        />
      )}
    </>
  );
}
