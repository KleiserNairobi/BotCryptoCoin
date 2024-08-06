import api from "./apiBack";
import { ISymbols } from "../models/SymbolsModel";

const URL_SIMBOLOS = "/api/binance/simbolos";

export async function getSymbols(): Promise<ISymbols[]> {
  const response = await api.get(URL_SIMBOLOS);
  return response.data;
}
