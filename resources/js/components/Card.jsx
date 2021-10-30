import React from "react";

function Card({ illustration, children }) {
    return (
        <div className="p-6 shadow-md w-60">
            <img src={illustration} alt="illustration" />
            <p className="mt-5 text-center text-black-1">{children}</p>
        </div>
    );
}

export default Card;
