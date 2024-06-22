import { List, ListItem } from "@chakra-ui/react";
import {
  MdAlarmOn,
  MdOutlineExitToApp,
  MdOutlineSettingsSuggest,
  MdOutlineDiscount,
} from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { NavItem } from "./NavItem";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { ImCoinDollar } from "react-icons/im";

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
    title: "Dashboard",
  },
  {
    type: "link",
    label: "Automações",
    icon: MdAlarmOn,
    path: "/automacoes",
    title: "Automações",
  },
  {
    type: "link",
    label: "Ordens",
    icon: MdOutlineDiscount,
    path: "/ordens",
    title: "Ordens",
  },
  {
    type: "link",
    label: "Símbolos",
    icon: ImCoinDollar,
    path: "/simbolos",
    title: "Símbolos",
  },
  // {
  //   type: "link",
  //   label: "Usuários",
  //   icon: FiUser,
  //   path: "/usuarios",
  //   title: "Usuários",
  // },
  {
    type: "link",
    label: "Configurações",
    icon: MdOutlineSettingsSuggest,
    path: "/configuracoes",
    title: "Configurações",
  },
  {
    type: "link",
    label: "Sair",
    icon: MdOutlineExitToApp,
    path: "/sair",
    title: "Sair",
  },
];

export function Navigation({ collapse }: NavigationProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <List w={"full"} mt={8} ml={6}>
      {items.map((item, index) => (
        <ListItem key={index} mb={1}>
          <NavItem
            item={item}
            isActive={index === activeIndex}
            collapse={collapse}
            onClick={() => handleItemClick(index)}
          />
        </ListItem>
      ))}
    </List>
  );
}
