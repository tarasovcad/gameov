import {LockKeyhole, Settings, UserRoundCog} from "lucide-react";

export const userTabs = [
  {
    label: "Profile",
    component: <Settings className="z-10" />,
  },
  {
    label: "Account",
    component: <UserRoundCog className="z-10" />,
  },
  {
    label: "Security",
    component: <LockKeyhole className="z-10" />,
  },
];
