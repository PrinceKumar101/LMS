import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
    <div className="flex">
    <div className="h-full sticky top-0 z-10 w-1/6 bg-rose-500 flex justify-center">
        <aside className="h-screen   ">
            <Sidebar/>
        </aside>
    </div>
    <div className="w-full h-full">
        <header className="bg-white sticky top-0 z-20">
            <Navbar/>
        </header>

        <main className="bg-yellow-500 h-screen">
            <Outlet/>
        </main>

    </div>
    </div>
    </>
  );
};

export default MainLayout;
