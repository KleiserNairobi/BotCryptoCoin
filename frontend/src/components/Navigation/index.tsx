import { List, ListItem } from "@chakra-ui/react";
import {
  MdAlarmOn,
  MdOutlineExitToApp,
  MdOutlineSettingsSuggest,
  MdOutlineDiscount,
} from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { NavItem } from "./NavItem";

type NavigationProps = {
  collapse: boolean;
};

const items = [
  {
    type: "header",
    label: "Menu",
  },
  {
    type: "link",
    label: "Dashboard",
    icon: AiOutlineDashboard,
    path: "/dashboard",
  },
  {
    type: "link",
    label: "Automações",
    icon: MdAlarmOn,
    path: "/automacoes",
  },
  {
    type: "link",
    label: "Ordens",
    icon: MdOutlineDiscount,
    path: "/ordens",
  },
  {
    type: "link",
    label: "Configurações",
    icon: MdOutlineSettingsSuggest,
    path: "/symbols",
  },
  {
    type: "link",
    label: "Sair",
    icon: MdOutlineExitToApp,
    path: "/sair",
  },
];

export function Navigation({ collapse }: NavigationProps) {
  return (
    <List w={"full"} mt={8}>
      {items.map((item, index) => (
        <ListItem key={index}>
          <NavItem item={item} isActive={index === 0} collapse={collapse} />
        </ListItem>
      ))}
    </List>
  );
}
