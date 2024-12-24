import React from "react";
import ActionBtn from "../components/reusable UI components/ActionBtn";
import { PlusSignIcon } from "hugeicons-react";

const page = () => {
    return (
        <section className="w-full h-full">
            <div className="flex justify-between items-center">
                <h2 className="text-xl">Products</h2>
                <ActionBtn text="Add Product" icon={<PlusSignIcon size={20} color={"#fff"} variant={"stroke"} />} />
            </div>
        </section>
    );
};

export default page;
