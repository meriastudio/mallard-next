import Heading from "../components/atoms/Heading";
import FancyHeading from "../components/atoms/FancyHeading";
import Banner from "../components/sections/Banner";
import TheOrder from "../components/sections/TheOrder";
import Traits from "../components/sections/Traits";
import Roadmap from "../components/sections/Roadmap";
import Team from "../components/sections/Team";
import Footer from "../components/sections/Footer";

import Benefits from "../components/sections/Benefits";
import FancyBox from "../components/atoms/FancyBox";

export default function Home() {
  return (
    <>
      <Banner>
        <h2 className="font-serif text-md sm:text-lg lg:text-2xl text-center uppercase drop-shadow-md">
          <strong>The Mallard Order</strong> is a secret society of ducks{" "}
          <br className="hidden 2xl:block" />
          hell-bent on dominating Cardano
        </h2>
      </Banner>

      <TheOrder id="order">
        <Heading>The Order</Heading>
        <p className="font-serif text:xl lg:text-2xl w-full tracking-wide">
          Deep in the depths of <strong>The Dark Swamp</strong> reside{" "}
          <strong>6,500</strong> unique Mallard Order Member NFTs
        </p>
        <p className=" "> -</p>
        <div className="flex justify-center flex-col items-center	p-0 m-0">
          <p className="text-center font-sans  leading-8 text-md lg:text-xl	font-normal tracking-wide">
            {" "}
            <span className="font-semibold ">MINT DATE:</span>MINT DATE: 30
            JULY, 2022
          </p>

          <p className="text-center font-sans leading-8 text-lg lg:text-xl	font-normal tracking-wide">
            <span className="font-semibold "> INVITATION WHITELIST:</span> 95
            ADA
          </p>
          <p className="text-center font-sans leading-8 text-lg lg:text-xl	font-normal tracking-wide">
            {" "}
            <span className="font-semibold "> INITIATE WHITELIST: 125 ADA</span>
          </p>
          <p className="text-center font-sans leading-8 text-lg lg:text-xl	font-normal tracking-wide">
            <span className="font-semibold "> PUBLIC MINT:</span> 125 ADA
          </p>
          <h2 className="font-sans text-warning text-xl lg:text-4xl font-bold py-6">
            SOLD OUT
          </h2>
          <div className="border-2 border-white px-8 py-3 lg:px-12 lg:py-4 ">
            <a
              className="font-serif font-bold text-xl lg:text-2xl uppercase decoration-0	block "
              href="#"
            >
              {" "}
              Join the ORDER
            </a>
          </div>
        </div>
      </TheOrder>

      <Traits id="traits">
        <FancyHeading>
          <span className="text-lg font-serif">Featuring</span>
          <br /> <span className="text-2xl font-serif">250+ unique traits</span>
        </FancyHeading>
      </Traits>

      <Roadmap id="roadmap">
        <Heading>Roadmap</Heading>
      </Roadmap>
      <Benefits id="benefit">
        <Heading>Benefits</Heading>
      </Benefits>

      <Team id="team" />

      <Footer id="footer"></Footer>
    </>
  );
}
