import React from "react";

function SortBy() {
    return (
        <div className="flex flex-col gap-1">
            <p className="text-base text-black-1">Urut berdasarkan</p>
            <select
                name="sort-by"
                id="sort"
                className="bg-blue-3 text-white-1 py-2 px-3 rounded-md w-56 focus:outline-none border-4 border-blue-3 focus:border-blue-2 transition-all duration-500"
            >
                <option value="time">Waktu dibuat</option>
                <option value="response">Jumlah response</option>
            </select>
        </div>
    );
}

export default SortBy;
