import React from "react";

function Reply({ name, username, reply, time, avatar }) {
    return (
        <div className="flex flex-col gap-2 mt-2">
            <div className="head flex items-end justify-between">
                <div className="flex gap-2">
                    <div className="h-8 w-8 rounded-full bg-orange-3 overflow-hidden">
                        <img src={`${base_url}/${avatar}`} alt="avatar" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-black-1">
                            {name}
                        </h4>
                        <h4 className="text-xs text-black-2">{username}</h4>
                    </div>
                </div>
                <p className="time text-xs text-black-2">{time}</p>
            </div>
            <div className="bg-blue-1 rounded-md px-6 py-3">{reply}</div>
        </div>
    );
}

export default Reply;
