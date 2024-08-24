import {LockKeyhole, UserRoundCog} from "lucide-react";

export const userTabs = [
  {
    label: "Account",
    component: <UserRoundCog className="z-10" />,
  },
  {
    label: "Security",
    component: <LockKeyhole className="z-10" />,
  },
];
