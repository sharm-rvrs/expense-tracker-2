import {
  Paper,
  Text,
  Group,
  Stack,
  ActionIcon,
  rem,
  Button,
  Grid,
  Select,
  MultiSelect,
} from "@mantine/core";
import { BarChart } from "@mantine/charts";
import { IconChartBar, IconChecklist, IconMap2, IconRocket } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { data } from "../types/data";

function DashboardBox({
  title,
  icon,
  children,
  minHeight = rem(250),
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  minHeight?: string | number;
}) {
  return (
    <Paper
      shadow="md"
      radius="md"
      p="md"
      withBorder
      style={{
        border: "1px solid white",
        minHeight,
      }}
    >
      <Group mb="xs">
        <ActionIcon variant="light" size="lg" radius="xl">
          {icon}
        </ActionIcon>
        <Text size="lg" fw={700}>
          {title}
        </Text>
      </Group>
      {children}
    </Paper>
  );
}

export default function Home() {
  const years = Array.from(new Set(data.map((d) => d.year))).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());

  const monthsInYear = useMemo(
    () => data.filter((d) => d.year === selectedYear).map((d) => d.month),
    [selectedYear]
  );

  const [selectedMonths, setSelectedMonths] = useState<string[]>(monthsInYear);

  // Update selectedMonths when year changes
  const handleYearChange = (yearStr: string | null) => {
    if (!yearStr) return;
    const year = parseInt(yearStr);
    setSelectedYear(year);
    const months = data.filter((d) => d.year === year).map((d) => d.month);
    setSelectedMonths(months);
  };

  const filteredData = data.filter(
    (d) => d.year === selectedYear && selectedMonths.includes(d.month)
  );

  return (
    <Stack p="md" gap="md">
      {/* Pending Tasks and Recent Trips */}
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <DashboardBox title="Pending Tasks" icon={<IconChecklist size={20} />}>
            Track your expenses easily and efficiently.
          </DashboardBox>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <DashboardBox title="Recent Trips" icon={<IconMap2 size={20} />}>
            Use the sidebar to access different sections of the app.
          </DashboardBox>
        </Grid.Col>
      </Grid>

      {/* Quick Access */}
      <DashboardBox title="Quick Access" icon={<IconRocket size={20} />} minHeight={rem(50)}>
        <Grid>
          <Grid.Col span={6}>
            <Button>Create</Button>
          </Grid.Col>
          <Grid.Col span={6}>
            <Button>Add Trips</Button>
          </Grid.Col>
        </Grid>
      </DashboardBox>

      {/* Spending Overview */}
      <DashboardBox title="Spending Overview" icon={<IconChartBar size={20} />}>
        <Grid mb="md">
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Select
              label="Select year"
              data={years.map(String)}
              value={String(selectedYear)}
              onChange={handleYearChange}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 8 }}>
            <MultiSelect
              label="Select months"
              data={monthsInYear}
              value={selectedMonths}
              onChange={setSelectedMonths}
              searchable
              clearable
              nothingFoundMessage="No months found"
            />
          </Grid.Col>
        </Grid>
        <BarChart
          h={200}
          data={filteredData}
          dataKey="month"
          series={[{ name: "expenses", color: "blue" }]}
        />
      </DashboardBox>
    </Stack>
  );
}