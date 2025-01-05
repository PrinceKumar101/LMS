import React from "react";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const MainLayout: React.FC = () => {
  return (
    <>

      <div className="flex h-screen bg-slate-200 w-full">
        {/* Sidebar Section */}
        <div className="z-10 h-full w-full">
          <div className="h-screen flex flex-col justify-center items-center w-full">
            <SidebarProvider>
              <AppSidebar />
              <main className="px-7 flex flex-col justify-start items-center gap-2 w-full">
                <div className="w-full sticky top-0 flex  items-center gap-3">
                <SidebarTrigger/>
                  <Navbar />
                </div>
                <div>
                  <Outlet />
                </div>
              </main>
            </SidebarProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
