import React from "react";
import { Notification03Icon, MessageTranslateIcon, Moon02Icon } from "hugeicons-react";

const Header = () => {
    return (
        <header className="w-full h-24 bg-white border border-red-400 flex items-center justify-between px-5 py-4">
            <div className="w-96 h-10">
                <input
                    type="text"
                    name="search"
                    className="w-full h-full bg-gray-50 border border-gray-300 text-gray-800 font-poppins py-2 px-4 rounded-full focus:ring focus:ring-priblue focus:border-none outline-none"
                    placeholder="Invoice Number"
                />
            </div>
            <div className="flex items-center justify-evenly w-1/4">
                <div className="flex items-center justify-evenly w-1/2">
                    <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                        <MessageTranslateIcon size={20} color={"#eb455f"} variant={"stroke"} />
                    </div>
                    <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                        <Moon02Icon size={20} color={"#eb455f"} variant={"stroke"} />
                    </div>
                    <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                        <Notification03Icon size={20} color={"#eb455f"} variant={"stroke"} />
                    </div>
                </div>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"></div>
            </div>
        </header>
    );
};

export default Header;
