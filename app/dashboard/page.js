import React from 'react'
import ActionBtn from '../components/reusable UI components/ActionBtn'
import { PlusSignIcon, Invoice01Icon, UserGroupIcon } from "hugeicons-react";
import InfoCard from '../components/reusable UI components/InfoCard';


const page = () => {
  return (
      <section className="w-full h-full overflow-auto scrollbar-hide">
          <div className="flex justify-between items-center">
              <h2 className="text-xl">Dashboard</h2>
              <ActionBtn text="Add Invoice" icon={<PlusSignIcon size={20} color={"#fff"} variant={"stroke"} />} />
          </div>
          <div className="grid grid-cols-4 grid-rows-4 gap-5 w-full h-full mt-5">
              <InfoCard title={"Invoices"} icon={<Invoice01Icon size={24} className="text-white" variant={"stroke"} />} number={219} linkPath={"/invoices"} iconBg={"bg-green-400"} />
              <InfoCard title={"Customers"} icon={<UserGroupIcon size={24} className="text-white" variant={"stroke"} />} number={27} linkPath={"/customers"} iconBg={"bg-secondary"} />
              <InfoCard title={"Products"} icon={<Invoice01Icon size={24} className="text-white" variant={"stroke"} />} number={12} linkPath={"/products"} iconBg={"bg-blue-500"}/>
          </div>
      </section>
  );
}

export default page