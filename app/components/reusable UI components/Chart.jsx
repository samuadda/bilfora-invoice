"use client";
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Chart = ({data, strokeColor, gradientColor}) => {
    // const data = [
    //     { day: "Mon", invoices: 15 },
    //     { day: "Tue", invoices: 2 },
    //     { day: "Wed", invoices: 8 },
    //     { day: "Thu", invoices: 5 },
    //     { day: "Fri", invoices: 12 },
    //     { day: "Sat", invoices: 8 },
    //     { day: "Sun", invoices: 16 },
    // ];

    return (
        <div>
            <ResponsiveContainer aspect={3}>
                <AreaChart width={10} data={data}>
                    {/* Gradient Definition */}
                    <defs>
                        <linearGradient id="colorInvoices" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={gradientColor} stopOpacity={1} />
                            <stop offset="100%" stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="invoices" stroke={strokeColor} strokeWidth={3} fill="url(#colorInvoices)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
