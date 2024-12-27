import "./globals.css";
import SideBar from "./components/Layout/SideBar";
import Header from "./components/Layout/Header";
import { Poppins } from "next/font/google";


const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All weights
    subsets: ["latin"],
});

export const metadata = {
    title: "Bilfora",
    description: "Fast Easy and on the Go invoicing",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} flex h-screen`}>
                <SideBar />
                <div className="flex flex-col flex-1 min-h-screen ">
                    <Header />
                    <main className="flex-1 p-6 overflow-auto bg-gray-50">{children}</main>
                </div>
            </body>
        </html>
    );
}
