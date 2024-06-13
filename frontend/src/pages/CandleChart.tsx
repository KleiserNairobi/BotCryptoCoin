import { Flex } from "@chakra-ui/react";
import { useEffect, useMemo, useRef } from "react";

type CandleChartProps = {
  simbolo: string;
};

export function CandleChart({ simbolo = "BTCUSDT" }: CandleChartProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
      {
        "locale": "br",      
        "autosize": true,
        "symbol": "BINANCE:${simbolo}",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "gridColor": "rgba(242, 242, 242, 0.06)",
        "withdateranges": true,
        "range": "YTD",
        "allow_symbol_change": true,
        "details": true,
        "hotlist": false,
        "calendar": false,
        "hide_side_toolbar": true
      }`;
      container.current.appendChild(script);
    }
  }, [simbolo]);

  const candleContainer = useMemo(
    () => (
      <Flex h={"60%"} w={"100%"} borderRadius={10} p={2} bg={"White"} mt={5}>
        <div
          ref={container}
          className="tradingview-widget-container"
          style={{ height: "100%", width: "100%" }}
        >
          <div
            className="tradingview-widget-container__widget"
            style={{ height: "calc(100% - 32px)", width: "100%" }}
          ></div>
        </div>
      </Flex>
    ),
    []
  );

  return candleContainer;
}
