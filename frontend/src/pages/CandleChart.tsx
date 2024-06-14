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
        "interval": "1",
        "symbol": "BINANCE:${simbolo}",
        "timezone": "America/Sao_Paulo",
        "theme": "light",
        "style": "1",
        "enable_publishing": false,
        "allow_symbol_change": false,
        "details": true,
        "withdateranges": true,
        "range": "YTD",
        "hide_side_toolbar": false,
        "details": true,
        "hotlist": true,
        "calendar": false,
        "studies": [
          "RSI@tv-basicstudies"
        ],
        "hide_volume": true,
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
