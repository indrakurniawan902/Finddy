import { Link } from "@inertiajs/inertia-react";
import React from "react";

function StatusCard({ children, number, href }) {
    return (
        <Link
            href={href}
            className="flex gap-3 px-4 py-3 rounded-xl bg-white-1 shadow-sm items-center justify-center"
        >
            <div className="badge rounded-full font-extrabold text-2xl text-white-1 bg-orange-3 h-12 w-12 flex items-center justify-center">
                {number}
            </div>
            <p className="font-semibold text-black-1">{children}</p>
        </Link>
    );
}
export default StatusCard;
