import React from "react";
import { Link } from "@inertiajs/inertia-react";

function Button({ children, href, type, isFull, isSubmit }) {
    let style = "rounded-lg font-semibold text-xl transition box-border ";
    style +=
        type === "primary"
            ? "px-6 py-3 text-white-1 bg-blue-3 shadow-blue hover:bg-blue-4 "
            : "px-5 py-2 text-blue-3 border-4 border-blue-3 hover:border-blue-4 hover:bg-blue-1 ";

    style += isFull ? "w-full" : "";

    return (
        <button className={style} type={isSubmit ? "submit" : null}>
            <Link href={href}> {children} </Link>
        </button>
    );
}

export default Button;
