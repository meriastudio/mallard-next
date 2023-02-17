import React from "react";
import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Accordion({ items, ...props }) {
  return (
    <div {...props}>
      {items.map(({ heading, content }) => (
        <Disclosure key={heading}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-6 py-3 text-left border-b border-primary">
                <span className="font-bold uppercase">{heading}</span>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`${
                    open ? "rotate-180" : "rotate-0"
                  } transform w-5 h-5 transition-transform`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="p-6 space-y-6">
                {typeof content === "string" ? <p>{content}</p> : content}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
