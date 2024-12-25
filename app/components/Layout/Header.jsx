import { Notification03Icon, MessageTranslateIcon, Moon02Icon, Sun02Icon } from "hugeicons-react";
import Image from "next/image";
import Toggle from "../reusable UI components/Toggle";

const Header = () => {
    return (
        <header className="w-full h-20 flex items-center justify-between px-10 py-4 border-b border-gray-200">
            <div className="w-96 h-10">
                <input
                    type="text"
                    name="search"
                    className="w-full h-full bg-gray-50 border border-gray-300 text-gray-800 font-poppins py-2 px-4 rounded-lg focus:ring focus:ring-priblue focus:border-none outline-none"
                    placeholder="Invoice Number"
                />
            </div>
            <div className="flex items-center justify-end w-1/2">
                <div className="flex items-center justify-end w-1/2">
                    <button className="w-10 h-10 mx-1 rounded-full flex items-center justify-center bg-gray-100 transition-colors duration-300">
                        <MessageTranslateIcon size={24} className="text-primary hover:text-secondary" variant={"stroke"} />
                    </button>
                    <button className="w-10 h-10 mx-1 rounded-full flex items-center justify-center bg-gray-100 transition-colors duration-300">
                        <Toggle
                            initIcon={<Sun02Icon size={24} className="text-primary hover:text-secondary" variant={"stroke"} />}
                            secIcon={<Moon02Icon size={24} className="text-primary hover:text-secondary" variant={"stroke"} />}
                        />
                    </button>
                    <button className="w-10 h-10 mx-1 rounded-full flex items-center justify-center bg-gray-100 transition-colors duration-300">
                        <Notification03Icon size={24} className="text-primary hover:text-secondary" variant={"stroke"} />
                    </button>
                    <button className="w-12 h-12 ml-4 bg-secondary rounded-full overflow-hidden flex items-center justify-center ring-2 ring-secondary">
                        <Image src={"/images/avatar.jpg"} alt="avatar" width={52} height={52} className="object-cover"></Image>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
