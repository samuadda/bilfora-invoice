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
            <body className="flex">
                <SideBar />
                <Header />
                {children}
            </body>
        </html>
    );
}
