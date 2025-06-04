import { useState } from "react";
import {
  IconGauge,
  IconCreditCard,
  IconChevronRight,
  IconMap,
  IconSettings2,
} from "@tabler/icons-react";
import { Box, NavLink } from "@mantine/core";

const data = [
  { icon: IconGauge, label: "Home", description: "Item with description", link: "/home" },
  {
    icon: IconCreditCard,
    label: "Expenses",
    link: "/expenses",
  },
  { icon: IconMap, label: "Trips" },
  { icon: IconSettings2, label: "Settings" },
];

function Sidebar() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      href={item.link || "#"}
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
    //   rightSection={item.rightSection}
      leftSection={<item.icon size={16} stroke={1.5} />}
      onClick={() => setActive(index)}
      color="lime"
    />
  ));

  return <Box w={220}>{items}</Box>;
}

export default Sidebar;