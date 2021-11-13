import { Link } from "@inertiajs/inertia-react";
import React from "react";

function StatusCard({ children, number, href }) {
    return (
        <Link
            href={href}
            className="flex gap-1 md:gap-4 px-3 py-2 md:px-4 md:py-3 rounded-xl bg-white-1 shadow-sm items-center justify-center"
        >
            <div className="badge rounded-full font-extrabold text-base md:text-xl text-white-1 bg-orange-3 h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center">
                {number}
            </div>
            <p className="font-semibold text-xs md:text-base text-black-1 w-min lg:w-max">
                {children}
            </p>
        </Link>
    );
}
export default StatusCard;
