import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { throttle } from "lodash";
import Logo from "../../icons/Logo";
import { links, socialLinks } from "../../consts/navLinks";

export default function Header({ onOpen }) {
  const [isMini, setIsMini] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = throttle(() => {
    if (window.scrollY > 100) {
      setIsMini(true);

      return;
    }

    setIsMini(false);
  }, 100);

  return (
    <header
      className={`  ${
        isMini && "bg-black"
      } fixed z-20 top-0 left-0 right-0 bg-gradient-to-b from-header to-transparent`}
    >
      <div className="flex px-4 sm:px-10 xxl:container my-6 justify-between items-center w-full">
        <Link href="/">
          <a className="hidden lg:block">
            <Logo className={`${isMini ? "w-16" : "w-28"} transition-all`} />
          </a>
        </Link>

        <button
          type="button"
          className="flex lg:hidden items-center justify-center w-10 h-10"
          onClick={() => {
            onOpen();
            scrollToTop();
          }}
        >
          <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
        </button>

        <div className="flex space-x-8">
          <nav className="hidden lg:block">
            <ul className="flex space-x-2">
              {links.map(({ text, href }) => (
                <li key={href}>
                  <Link href={href}>
                    <a className="block px-4 lg:px-2 xl:px-4 py-2 lg:py-1 xl:py-2 bg-off-black border border-off-white uppercase">
                      {text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <ul className="flex space-x-2.5 mr-2 lg:ml-0">
              {socialLinks.map(({ text, href, icon }) => (
                <li key={href}>
                  <Link href={href}>
                    <a
                      className="block border border-white rounded-full p-2"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={text}
                    >
                      <FontAwesomeIcon icon={icon} className="block w-5 h-5" />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
