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
import { TbClipboardText } from "react-icons/tb";
import { GrSchedule } from "react-icons/gr";
import { RiVideoChatLine } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoFolderOutline } from "react-icons/io5";
import { FaRegNoteSticky } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { PiGraduationCap } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";

type sidebar_content_type = {
  name: string;
  icon: React.ReactNode | null;
  link: string;
};
const items: sidebar_content_type[] = [
  { name: "Dashboard", icon: <BiPieChartAlt2 />, link: "/dashboard" },
  { name: "Assignment", icon: <TbClipboardText />, link: "/assignment" },
  { name: "Schedule", icon: <GrSchedule />, link: "/schedule" },
  { name: "Recording", icon: <RiVideoChatLine />, link: "/recording" },
  { name: "Discussion", icon: <IoChatbubblesOutline />, link: "/discussion" },
  { name: "Resources", icon: <IoFolderOutline />, link: "/resources" },
  { name: "Notes", icon: <FaRegNoteSticky />, link: "/notes" },
  { name: "Download", icon: <MdOutlineFileDownload />, link: "/download" },
  { name: "Classes", icon: <SiGoogleclassroom />, link: "/classes" },
  { name: "Courses", icon: <PiGraduationCap />, link: "/courses" },
  { name: "Settings", icon: <CiSettings />, link: "/settings" },
  { name: "Login", icon: null, link: "/login" },
  { name: "Signup", icon: null, link: "/signup" },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl px-10 pb-5 pt-5">
            <Link to={"/"}> Lms</Link>
          </SidebarGroupLabel>
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
