import api from "./apiBack";

const URL_SIMBOLOS = "/api/binance/simbolos";

export function getSymbols() {
  return api.get(URL_SIMBOLOS);
}
