import { AppShell, Button, Group, Title } from '@mantine/core'
import reactlogo from '../assets/react.svg'
import Sidebar from './Sidebar';

const App: React.FC = () => {
  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 280, breakpoint: "md" }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <img src={reactlogo} alt="React Logo" style={{ height: 40 }} />
          <Title order={2}>Personal Expense Tracker</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Sidebar />
      </AppShell.Navbar>
      
    </AppShell>
  );
};

export default App;
