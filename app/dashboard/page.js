import React from "react";
import ActionBtn from "../components/reusable UI components/ActionBtn";
import { PlusSignIcon, Invoice01Icon, UserGroupIcon } from "hugeicons-react";
import InfoCard from "../components/reusable UI components/InfoCard";

const page = () => {
    const invoiceData = [
        { day: "Mon", dataKey: 15 },
        { day: "Tue", dataKey: 2 },
        { day: "Wed", dataKey: 8 },
        { day: "Thu", dataKey: 5 },
        { day: "Fri", dataKey: 12 },
        { day: "Sat", dataKey: 8 },
        { day: "Sun", dataKey: 16 },
    ];
    const customersData = [
        { day: "Mon", dataKey: 23 },
        { day: "Tue", dataKey: 33 },
        { day: "Wed", dataKey: 19 },
        { day: "Thu", dataKey: 12 },
        { day: "Fri", dataKey: 33 },
        { day: "Sat", dataKey: 42 },
        { day: "Sun", dataKey: 16 },
    ];
    const ProductsData = [
        { day: "Mon", dataKey: 1 },
        { day: "Tue", dataKey: 2 },
        { day: "Wed", dataKey: 8 },
        { day: "Thu", dataKey: 2 },
        { day: "Fri", dataKey: 12 },
        { day: "Sat", dataKey: 8 },
        { day: "Sun", dataKey: 25 },
    ];

    return (
        <section className="w-full h-full overflow-auto scrollbar-hide p-5">
            <div className="flex justify-between items-center">
                <h2 className="text-xl">Dashboard</h2>
                <ActionBtn text="Add Invoice" icon={<PlusSignIcon size={20} color={"#fff"} variant={"stroke"} />} />
            </div>
            <div className="grid grid-cols-4 grid-rows-3 gap-5 w-full h-full mt-5">
                <InfoCard
                    title={"Invoices"}
                    icon={<Invoice01Icon size={24} className="text-white" variant={"stroke"} />}
                    number={219}
                    linkPath={"/invoices"}
                    iconBg={"bg-green-400"}
                    chartProps={{ data: invoiceData, strokeColor: "#16a34a", gradientColor: "#4ade80" }}
                />
                <InfoCard
                    title={"Customers"}
                    icon={<UserGroupIcon size={24} className="text-white" variant={"stroke"} />}
                    number={27}
                    linkPath={"/customers"}
                    iconBg={"bg-secondary"}
                    chartProps={{ data: customersData, strokeColor: "#e63550", gradientColor: "#EB455F" }}
                />
                <InfoCard
                    title={"Products"}
                    icon={<Invoice01Icon size={24} className="text-white" variant={"stroke"} />}
                    number={12}
                    linkPath={"/products"}
                    iconBg={"bg-blue-500"}
                    chartProps={{ data: ProductsData, strokeColor: "#5b91ad", gradientColor: "#BAD7E9" }}
                />
            </div>
        </section>
    );
};

export default page;
