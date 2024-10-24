import {Layer} from "iconsax-react";
import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  Bookmark,
  BookOpen,
  Bot,
  ChartPie,
  ChevronRight,
  ChevronsUpDown,
  CircleHelp,
  Command,
  CreditCard,
  File,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  House,
  Layers,
  LogOut,
  Map,
  MessageSquare,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings,
  Settings2,
  Sparkles,
  SquareTerminal,
  StickyNote,
  Trash2,
  Users,
} from "lucide-react";

export const adminDashboardData = {
  user: {
    name: "Maksym Tarasov",
    email: "tarasovcad@gmail.com",
    avatar: "/sign-up6.jpg",
  },
  websites: [
    {
      name: "Gameov",
      logo: "/logo.svg",
    },
    {
      name: "Gasp Games",
      logo: "/svg/fake-logo.svg",
    },
  ],
  navMain: [
    {title: "Dashboard", link: "/admin-dashboard/dashboard", icon: House},
    {title: "Posts", link: "/admin-dashboard/posts", icon: File},
    {title: "Categories", link: "#", icon: Layers},
    {title: "Analytics", link: "#", icon: ChartPie},
  ],
  teamManagement: [
    {title: "Teams", link: "#", icon: StickyNote},
    {title: "Comments", link: "#", icon: MessageSquare},
    {title: "Users", link: "#", icon: Users},
  ],
  other: [
    {title: "Settings", link: "#", icon: Settings},
    {title: "Help & Center", link: "#", icon: CircleHelp},
  ],
};
