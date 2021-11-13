import React from "react";
import Button from "../Button";

function SearchForum() {
    return (
        <form className="flex gap-2 md:gap-5 max-h-10 md:max-h-full">
            <input type="text" className="input-2 flex-grow" required />
            <Button type="primary" isSubmit>
                Cari
            </Button>
        </form>
    );
}

export default SearchForum;
