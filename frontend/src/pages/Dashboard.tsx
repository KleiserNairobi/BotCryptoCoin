import { Flex } from "@chakra-ui/react";
import { CandleChart } from "./CandleChart";

export default function Dashboard() {
  return (
    <Flex h={"100vh"} direction={"column"}>
      <CandleChart simbolo="BTCUSDT" />
    </Flex>
  );
}
