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
import { Link, useLocation } from "react-router-dom"; // Import for routing logic
import { BiPieChartAlt2 } from "react-icons/bi";

type sidebar_content_type ={name:string, icon:React.ReactNode | null , link:string}
const items:sidebar_content_type[] = [
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
  { name: "Login", icon: null, link: "/login" },
  { name: "Signup", icon: null, link: "/signup" },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl px-10 pb-5 pt-5"><Link to={"/"}> Lms</Link></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex gap-2">
              {items.map((item) => {
                const isActive = location.pathname === item.link;
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link
                        to={item.link}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md`}
                        
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
