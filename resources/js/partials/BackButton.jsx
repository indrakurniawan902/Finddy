import { Link } from "@inertiajs/inertia-react";
import React from "react";
import arrowLeftIcon from "../../img/icon/arrow-left.svg";

function BackButton({ href }) {
    return (
        <Link href={href} className="flex gap-1 items-center">
            <img
                src={arrowLeftIcon}
                height="24px"
                width="24px"
                alt="arrow left icon"
            />
            <p className="text-black-1 font-semibold hover:text-blue-3">
                Kembali
            </p>
        </Link>
    );
}

export default BackButton;
