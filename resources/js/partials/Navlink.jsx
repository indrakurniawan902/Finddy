import React from "react";
import { Link } from "@inertiajs/inertia-react";

function Navlink({ children, name, page, href }) {
    return (
        <Link
            href={href}
            className={`font-semibold text-xl hover:font-bold hover:text-blue-4 transition-all duration-300 ${
                page === name ? "text-blue-3" : "text-black-1"
            } `}
        >
            {children}
        </Link>
    );
}

export default Navlink;
