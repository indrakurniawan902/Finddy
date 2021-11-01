import React from "react";

function Card({ illustration, children, duration }) {
    return (
        <div
            className="p-6 shadow-md w-60"
            data-aos="fade-up"
            data-aos-duration={duration}
        >
            <img src={illustration} alt="illustration" />
            <p className="mt-5 text-center text-black-1">{children}</p>
        </div>
    );
}

export default Card;
