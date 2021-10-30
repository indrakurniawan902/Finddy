import React from "react";

function Contact({ name, contact }) {
    return (
        <div className="flex flex-col gap-2 items-center bg-orange-3 text-white-1 rounded-md py-2 px-8">
            <h2 className="name font-bold text-xl">{name}</h2>
            <p className="contact text-xl">{contact}</p>
        </div>
    );
}

export default Contact;
