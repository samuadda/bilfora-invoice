"use client";
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Chart = ({data, strokeColor, gradientColor}) => {
    const gradientId = `colorGradient-${strokeColor.replace("#", "")}`;


    return (
        <div className="h-24 w-full relative">
            <ResponsiveContainer aspect={5 / 2}>
                <AreaChart data={data}>
                    {/* Gradient Definition */}
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={gradientColor} stopOpacity={1} />
                            <stop offset="100%" stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="dataKey" stroke={strokeColor} strokeWidth={3} fill={`url(#${gradientId})`} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
