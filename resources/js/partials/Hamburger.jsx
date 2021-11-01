import React from "react";

const defaultHamburgerLine =
    "h-1 w-6 my-0.5 rounded-full bg-blue-3 transition ease transform duration-300";

function Hamburger({ isOpen }) {
    return (
        <>
            <div
                className={`${defaultHamburgerLine} ${
                    isOpen
                        ? "rotate-45 translate-y-2 opacity-80 group-hover:opacity-100"
                        : "opacity-80 group-hover:opacity-100"
                }`}
            ></div>
            <div
                className={`${defaultHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-80 group-hover:opacity-100"
                }`}
            ></div>
            <div
                className={`${defaultHamburgerLine} ${
                    isOpen
                        ? "-rotate-45 -translate-y-2 opacity-80 group-hover:opacity-100"
                        : "opacity-80 group-hover:opacity-100"
                }`}
            ></div>
        </>
    );
}

export default Hamburger;
