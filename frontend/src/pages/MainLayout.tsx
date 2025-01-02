import React from "react";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="flex h-screen bg-slate-200">
        {/* Sidebar Section */}
        <div className="z-10 h-full ">
          <aside className="h-screen flex flex-col justify-center items-center">
            <SidebarProvider>
              <AppSidebar />
              <main className="px-7 flex flex-col justify-start items-center gap-2">
                <div className="w-full sticky top-0 flex justify-center items-center gap-3">
                <SidebarTrigger/>
                  <Navbar />
                </div>
                <div>
                  <Outlet />
                </div>
              </main>
            </SidebarProvider>
          </aside>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
