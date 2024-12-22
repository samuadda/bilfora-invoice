"use client";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbInvoice, TbReportSearch } from "react-icons/tb";
import { LiaHandshakeSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";

const SideBar = () => {
    const currentDate = new Date();
    const date = [currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()].join("-");

    return (
        <div className="min-h-screen w-64">
            <div className="p-5">
                <Link href="/">
                    <h1 id="logo" className="font-moonet text-praimary text-6xl">
                        Bilfora
                    </h1>
                </Link>
            </div>
            <nav className="w-full mt-4 text-praimary">
                <ul>
                    <li className="flex items-center p-5 hover:bg-priBlu">
                        <LuLayoutDashboard className="text-xl" />
                        <Link href="/" className="ml-3 font-medium">
                            Dashboard
                        </Link>
                    </li>
                    <li className="flex items-center p-5 hover:bg-priBlu">
                        <TbInvoice className="text-xl" />
                        <Link href="/" className="ml-3 font-medium">
                            Invoices
                        </Link>
                    </li>
                    <li className="flex items-center p-5 hover:bg-priBlu">
                        <LiaHandshakeSolid className="text-xl" />
                        <Link href="/" className="ml-3 font-medium">
                            Clients
                        </Link>
                    </li>
                    <li className="flex items-center p-5 hover:bg-priBlu">
                        <TbReportSearch className="text-xl" />
                        <Link href="/" className="ml-3 font-medium">
                            Reports
                        </Link>
                    </li>
                    <li className="flex items-center p-5 hover:bg-priBlu">
                        <AiOutlineShopping className="text-xl" />
                        <Link href="/" className="ml-3 font-medium">
                            Shopping
                        </Link>
                    </li>
                    <li className="flex items-center p-5 hover:bg-priBlu">
                        <IoSettingsOutline className="text-xl" />
                        <Link href="/" className="ml-3 font-medium">
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="p-5 absolute bottom-0 text-sm text-gray-400 font-poppins">{date}</div>
        </div>
    );
};

export default SideBar;
