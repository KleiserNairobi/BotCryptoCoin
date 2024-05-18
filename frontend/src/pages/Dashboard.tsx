import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import Chart from "react-apexcharts";

const options = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: theme.colors.gray[500],
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
  xaxis: {
    type: "datetime",
    axisBorder: { color: theme.colors.gray[600] },
    axisTicks: { color: theme.colors.gray[600] },
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1 ", data: [31, 120, 10, 28, 61, 18, 109] }];

export default function Dashboard() {
  return (
    <Flex h={"100vh"} direction={"column"}>
      <Header />
      <Flex w={"100%"} my={6} mx={"auto"} px={6} maxWidth={1480}>
        <Sidebar />
        <SimpleGrid
          flex={1}
          gap={4}
          minChildWidth={"320px"}
          alignItems={"flex-start"}
        >
          <Box p={8} bg={"gray.800"} borderRadius={8} pb={4}>
            <Text mb={4} fontSize={"lg"}>
              Inscritos na semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box p={8} bg={"gray.800"} borderRadius={8} pb={4}>
            <Text mb={4} fontSize={"lg"}>
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
