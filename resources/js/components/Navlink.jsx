import React from "react";
import { Link } from "@inertiajs/inertia-react";

function Navlink({ children, name, page }) {
    return (
        <Link
            className={`font-semibold text-xl ${
                page === name ? "text-blue-3" : "text-black-1"
            } `}
        >
            {children}
        </Link>
    );
}

export default Navlink;
