import { Link } from "@inertiajs/inertia-react";
import React from "react";
import personIcon from "../../../img/icon/person.svg";
import calendarIcon from "../../../img/icon/calendar.svg";
import responseIcon from "../../../img/icon/response.svg";
import editIcon from "../../../img/icon/edit.svg";
import deleteIcon from "../../../img/icon/trash.svg";

function Discussion({
    title,
    discussion,
    author,
    time,
    totalResponse,
    detailLink,
    authorLink,
    isEditable,
}) {
    return (
        <div
            className="py-3 px-5 flex flex-col gap-4 rounded-lg w-3/4 shadow-md"
            aria-label="discussion card"
        >
            <div className="flex justify-between items-center">
                <h3 className="text-blue-3 font-bold text-base hover:text-blue-4">
                    <Link href={detailLink}>{title}</Link>
                </h3>
                {isEditable ? (
                    <div className="flex gap-3 items-center">
                        <p className="text-xs">Status</p>
                        <Link href="#">
                            <img
                                src={editIcon}
                                height="20px"
                                width="20px"
                                alt="edit icon"
                            />
                        </Link>
                        <Link href="#">
                            <img
                                src={deleteIcon}
                                height="20px"
                                width="20px"
                                alt="delete icon"
                            />
                        </Link>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <p className="text-black-2 text-sm">{discussion}</p>
            <div className="flex gap-8 items-center justify-start">
                <div className="flex gap-2 items-center justify-start">
                    <img
                        src={personIcon}
                        alt="person icon"
                        height="24px"
                        width="24px"
                        aria-label="person icon"
                    />
                    <p className="text-orange-3 font-bold text-xs hover:text-orange-4">
                        <Link href={authorLink}>{author}</Link>
                    </p>
                </div>
                <div className="flex gap-2 items-center justify-start">
                    <img
                        src={calendarIcon}
                        alt="calendar icon"
                        height="24px"
                        width="24px"
                        aria-label="person icon"
                    />
                    <p className="text-orange-3 font-bold text-xs">{time}</p>
                </div>
                <div className="flex gap-2 items-center justify-start">
                    <img
                        src={responseIcon}
                        alt="response icon"
                        height="24px"
                        width="24px"
                        aria-label="person icon"
                    />
                    <p className="text-orange-3 font-bold text-xs">
                        {totalResponse} tanggapan
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Discussion;
