import Link from "next/link";
import React from "react";
import Chart  from "./Chart";

const InfoCard = ({ title, icon, number, linkPath, iconBg}) => {
    return (
        <div className="bg-white rounded-md shadow-md p-5">
            <div className="flex items-center justify-between h-1/3 gap-3">
                <h3 className="text-lg text-primary">{title}</h3>
                <Link href={linkPath} className={`rounded-full p-2 ${iconBg}`}>
                    {icon}
                </Link>
            </div>
            <div className="flex items-center justify-between mt-5 gap-4">
                <p className="text-2xl text-primary font-semibold">{number}</p>
                <div className="flex-1">
                    <Chart />
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
