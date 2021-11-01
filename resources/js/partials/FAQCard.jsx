import { React, useState } from "react";

function FAQCard({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className="bg-white-1 w-full rounded-lg px-6 py-4 cursor-pointer overflow-hidden shadow-sm border-0 border-blue-2 border-opacity-40 mb-3"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex gap-2 items-center justify-between">
                <div className="question font-semibold text-black-1">
                    {question}
                </div>
                <i
                    className={`h-6 w-6 transition-all flex-none duration-500 transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                    <img src="img/icon/chevron-down.svg" alt="chevron-icon" />
                </i>
            </div>
            <div
                className={`${
                    isOpen
                        ? "lg:max-h-24 max-h-80 mt-3 pt-3"
                        : "max-h-0 opacity-0"
                } border-t-2 border-blue-2 border-opacity-20 transition-all duration-500 text-black-2`}
            >
                {answer}
            </div>
        </div>
    );
}

export default FAQCard;
