import { AppShell, Group, Title } from "@mantine/core";
import reactlogo from "../assets/react.svg";
import Sidebar from "./Sidebar";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import Home from "../pages/home";
import Expenses from "../pages/expenses";

const App: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 280, breakpoint: "md" }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <img src={reactlogo} alt="React Logo" style={{ height: 40 }} />
          <Title order={2}>Test Only</Title>
        </Group>
        <ActionIcon
          variant="outline"
          color={isDark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          style={{ position: "absolute", right: 20, top: 20 }}
        >
          {isDark ? (
            <IconSun style={{ width: 18, height: 18 }} />
          ) : (
            <IconMoonStars style={{ width: 18, height: 18 }} />
          )}
        </ActionIcon>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Home />
      </AppShell.Main >
      
    </AppShell>
  );
};

export default App;
