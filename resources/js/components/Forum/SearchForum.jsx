import React from "react";
import Button from "../Button";

function SearchForum() {
    return (
        <form className="flex gap-5">
            <input type="text" className="input-2 flex-grow" />
            <Button type="primary">Cari Diskusi</Button>
        </form>
    );
}

export default SearchForum;
