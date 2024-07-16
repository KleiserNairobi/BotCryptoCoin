import { useEffect, useMemo, useRef } from "react";
import { Flex, useColorMode } from "@chakra-ui/react";

type CandleChartProps = {
  simbolo: string;
};

export function CandleChart({ simbolo = "BTCUSDT" }: CandleChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();
  const URL_TRADINGVIEW = import.meta.env.VITE_URL_TRADINGVIEW;

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const script = document.createElement("script");
      script.src = URL_TRADINGVIEW;
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "locale": "br",      
          "autosize": true,
          "interval": "1",
          "style": "1",
          "symbol": "BINANCE:${simbolo}",
          "timezone": "America/Sao_Paulo",
          "theme": "${colorMode === "light" ? "light" : "dark"}",
          "backgroundColor": "${
            colorMode === "light"
              ? "rgba(249, 250, 245, 1)"
              : "rgba(37, 42, 54, 1)"
          }",
          "allow_symbol_change": false,
          "details": true,
          "withdateranges": false,
          "range": "YTD",
          "hide_top_toolbar": true,
          "hide_side_toolbar": true,
          "details": false,
          "hotlist": false,
          "hide_volume": false,
          "hide_legend": true,
          "save_image": false,
          "studies": [
            "MASimple@tv-basicstudies"
          ],
          "support_host": "https://www.tradingview.com"
        }`;
      container.appendChild(script);
      return () => {
        if (container) {
          container.innerHTML = "";
        }
      };
    }
  }, [URL_TRADINGVIEW, colorMode, simbolo]);

  const candleContainer = useMemo(
    () => (
      <Flex p={3} w={"100%"} h={"100%"}>
        <div
          ref={containerRef}
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
