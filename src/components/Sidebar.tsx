import { Link, useLocation } from "react-router-dom";
import {
  IconGauge,
  IconCreditCard,
  IconMap,
  IconSettings2,
} from "@tabler/icons-react";
import { Box, NavLink } from "@mantine/core";

const data = [
  { icon: IconGauge, label: "Home", description: "this is home", link: "/home" },
  { icon: IconCreditCard, label: "Expenses", link: "/expenses" },
  { icon: IconMap, label: "Trips", link: "/trips" },
  { icon: IconSettings2, label: "Settings", link: "/settings" },
];

function Sidebar() {
  const location = useLocation();

  const items = data.map((item) => (
    <NavLink
      component={Link}
      to={item.link || "#"}
      key={item.label}
      active={location.pathname === item.link}
      label={item.label}
      description={item.description}
      leftSection={<item.icon size={16} stroke={1.5} />}
      color="lime"
    />
  ));

  return <Box w={220}>{items}</Box>;
}

export default Sidebar;