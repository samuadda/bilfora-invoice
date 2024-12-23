"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardBrowsingIcon, Invoice01Icon, Analytics01Icon, ProductLoadingIcon, Settings02Icon, UserGroupIcon, Logout01Icon } from "hugeicons-react";

const SideBar = () => {
    const pathname = usePathname();

    const navItems = [
        {
            title: "Dashboard",
            href: "/",
            icon: <DashboardBrowsingIcon size={24} className="text-primary" variant={"stroke"} />,
        },
        {
            title: "Invoices",
            href: "/invoices",
            icon: <Invoice01Icon size={24} className="text-primary" variant={"stroke"} />,
        },
        {
            title: "Customers",
            href: "/customers",
            icon: <UserGroupIcon size={24} className="text-primary" variant={"stroke"} />,
        },
        {
            title: "Reports",
            href: "/reports",
            icon: <Analytics01Icon size={24} className="text-primary" variant={"stroke"} />,
        },
        {
            title: "Products",
            href: "/products",
            icon: <ProductLoadingIcon size={24} className="text-primary" variant={"stroke"} />,
        },
    ];

    return (
        <div className="min-h-screen w-64 bg-white shadow-lg flex flex-col">
            <div className="p-5">
                <Link href="/">
                    <h1 id="logo" className="font-moonet text-primary text-6xl">
                        Bilfora
                    </h1>
                </Link>
            </div>
            <nav className="w-full mt-4 text-primary flex-1">
                <ul>
                    {navItems.map(item => (
                        <li key={item.title} className="flex items-center px-5 py-4 hover:bg-gray-100 transition-colors duration-300">
                            <Link href={item.href} className={`flex items-center w-full font-regular ${pathname === item.href ? "isActive" : ""}`}>
                                {/* Conditionally apply 'isActive' class to the icon */}
                                {React.cloneElement(item.icon, {
                                    className: `${pathname === item.href ? "isActive" : ""} ${item.icon.props.className}`,
                                })}{" "}
                                <span className="ml-3">{item.title}</span>
                                {/* Small indicator  */}
                                {pathname === item.href && <span id="when-active" className="glow" />}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mt-auto flex items-center justify-evenly py-5 border-t">
                <Link href="/LogIn" className="rounded-full p-3 hover:bg-gray-100  transition-colors duration-300">
                    <Logout01Icon size={24} className="text-primary hover:text-secondary" variant={"stroke"} />
                </Link>
                <Link href="/settings" className="rounded-full  p-3 hover:bg-gray-100 transition-colors duration-300">
                    <Settings02Icon size={24} className="text-primary" variant={"stroke"} />
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
