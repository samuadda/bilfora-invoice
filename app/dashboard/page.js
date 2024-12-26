import React from 'react'
import ActionBtn from '../components/reusable UI components/ActionBtn'
import { PlusSignIcon } from "hugeicons-react";
import InfoCard from '../components/reusable UI components/InfoCard';


const page = () => {
  return (
      <section className="w-full h-full">
          <div className="flex justify-between items-center">
              <h2 className="text-xl">Dashboard</h2>
              <ActionBtn text="Add Invoice" icon={<PlusSignIcon size={20} color={"#fff"} variant={"stroke"} />} />
          </div>
          <div className='grid grid-cols-3 grid-rows-3 gap-5 bg-red-300 w-full h-full mt-5'>
              <InfoCard classes={'h-full'}/>
              <InfoCard classes={'h-full'}/>
              <InfoCard classes={'h-full'}/>
          </div>
      </section>
  );
}

export default page