import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { links, socialLinks } from "../../consts/navLinks";
import Logo from "../../icons/Logo";

export default function MobileNav({ onClose }) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-70 space-y-12">
      <div className="flex px-4 sm:px-10 mt-6 justify-between items-center w-full">
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10"
          onClick={() => {
            onClose();
          }}
        >
          <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
        </button>

        <nav className="mr-2 lg:ml-0">
          <ul className="flex space-x-2.5">
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

      <div className="container flex pt-4  flex-col space-y-14 items-center">
        <Logo className="w-44 lg:hidden" />

        <nav>
          <ul className="flex flex-col space-y-2 text-center">
            {links.map(({ text, href }) => (
              <li key={href} onClick={() => onClose()}>
                <Link href={href}>
                  <a className="block w-48 px-4 lg:px-12 py-3.5 bg-off-black border border-off-white uppercase">
                    {text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
