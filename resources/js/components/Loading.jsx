import React, {useEffect} from "react";

function Loading({message}) {
    useEffect(() => {
        document.body.className = "no-scroll";
        return () => {
            document.body.className = "";
        };        
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center gap-8 justify-center fixed top-0 left-0 bg-white opacity-90 z-50 bg-white-2">
                <span
                    className="text-blue-3 opacity-100 block w-10 h-10"
                >
                    <svg className="animate-spin -ml-1 mr-3 h-14 w-14 text-blue-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#607EF5" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="#607EF5" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>                
                </span>
                <h1 className="text-black-2 text-lg text-center">{message}</h1>
        </div>
    );
}

export default Loading;
