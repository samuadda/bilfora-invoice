import Link from "next/link";
import React from "react";
import { Invoice01Icon } from "hugeicons-react";

const InfoCard = ({ classes, icon }) => {
    return (
        <div className={`bg-white rounded-md shadow-md p-5 ${classes}`}>
            <div className="flex items-center justify-between h-1/3">
                <h3 className="text-lg text-primary">Invoices</h3>
                <Link href="/invoices" className="rounded-full bg-green-400 p-2">
                    <Invoice01Icon size={24} className="text-white" variant={"stroke"} />
                </Link>
            </div>
            <div className="flex items-center justify-between mt-5">
                <p className="text-2xl text-primary font-semibold">219</p>
                <p className="text-sm text-gray-400 bg-slate-500 flex-1">CHART</p>
            </div>
        </div>
    );
};

export default InfoCard;
