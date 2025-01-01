import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiPieChartAlt2 } from "react-icons/bi";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Define the type for sidebar content

const MainSidebar = () => {
  // Correctly define the sidebar_item as an array
  type SidebarContent = {
    name: string;
    icon: React.ReactNode | null; // Define icon as ReactNode or null
    link: string | null;
  };
  const sidebar_items: SidebarContent[] = [
    { name: "Dashboard", icon: <BiPieChartAlt2 />, link: "/dashboard" },
    { name: "Assignment", icon: null, link: null },
    { name: "Recording", icon: null, link: null },
    { name: "Discussion", icon: null, link: null },
    { name: "Resources", icon: null, link: null },
    { name: "Notes", icon: null, link: null },
    { name: "Download", icon: null, link: null },
    { name: "Classes", icon: null, link: null },
    { name: "Courses", icon: null, link: null },
    { name: "Settings", icon: null, link: null },
  ];

   const sidebarItems = [
      { name: "Dashboard", icon: <BiPieChartAlt2 />, link: "/dashboard" },
      { name: "Assignment", icon: null, link: "/assignment" },
      { name: "Recording", icon: null, link: "/recording" },
      { name: "Discussion", icon: null, link: "/discussion" },
      { name: "Resources", icon: null, link: "/resources" },
      { name: "Notes", icon: null, link: "/notes" },
      { name: "Download", icon: null, link: "/download" },
      { name: "Classes", icon: null, link: "/classes" },
      { name: "Courses", icon: null, link: "/courses" },
      { name: "Settings", icon: null, link: "/settings" },
    ];

  return (
    <>
      <div>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebar_items.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild>
                        <Link to={item.link}>
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </>
  );
};

export default MainSidebar;
