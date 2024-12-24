"use client";
import React, { useState } from "react";
import { Moon02Icon, Sun02Icon } from "hugeicons-react";

const Toggle = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(prev => !prev);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <label className="relative w-10 h-10 rounded-full grid place-items-center cursor-pointer" htmlFor="switch">
                <input id="switch" type="checkbox" className="hidden" checked={isChecked} onChange={handleToggle} />
                {/* Sun Icon */}
                <div className={`absolute transition-transform duration-500 ${isChecked ? "scale-0 spin-out" : "scale-100 spin-in"}`}>
                    <Sun02Icon size={24} className="text-primary" variant={"stroke"} />
                </div>
                {/* Moon Icon */}
                <div className={`absolute transition-transform duration-500 ${isChecked ? "scale-100 spin-in" : "scale-0 spin-out"}`}>
                    <Moon02Icon size={24} className="text-primary" variant={"stroke"} />
                </div>
            </label>
        </div>
    );
};

export default Toggle;
