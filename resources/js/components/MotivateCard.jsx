import React from "react";

function MotivateCard() {
    return (
        <div className="px-6 pt-5 pb-6 w-full rounded-lg bg-blue-3">
            <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-semibold text-base md:text-xl text-white-1 tracking-widest bg-blue-2 py-1 px-6 md:w-2/4 text-center rounded-full">
                    MOTIVASI HARI INI
                </h2>
                <p className="text-white-1 text-sm md:text-lg text-center">
                    "Belajar sebanyak yang kamu bisa saat masih muda, karena
                    hidup menjadi terlalu sibuk nantinya."
                </p>
            </div>
        </div>
    );
}

export default MotivateCard;
