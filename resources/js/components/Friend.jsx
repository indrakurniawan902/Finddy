import { Link } from "@inertiajs/inertia-react";
import React from "react";

function Friend({ name, bidang, avatar, href }) {
    return (
        <Link
            href={href}
            className="flex gap-3 justify-between items-center px-5 py-4 bg-white-1 rounded-lg shadow-sm hover:bg-blue-1 transition-all duration-300"
        >
            <div className="flex gap-3">
                <div className="foto h-14 w-14 rounded-full bg-blue-3 overflow-hidden">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="name text-lg font-bold">{name}</p>
                    <p className="bidang text-xs px-2 py-0.5 border-1 border-blue-2 rounded-full text-center w-max">
                        {bidang}
                    </p>
                </div>
            </div>
            <i>
                <img src="./img/icon/information.svg" alt="information icon" />
            </i>
        </Link>
    );
}

export default Friend;
