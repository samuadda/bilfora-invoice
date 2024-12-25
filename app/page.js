import Image from "next/image";
import ActionBtn from "./components/reusable UI components/ActionBtn";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen min-w-screen bg-gray-50">
            <Link href="/dashboard">
                <ActionBtn text=" try for free" />
            </Link>
        </div>
    );
}
