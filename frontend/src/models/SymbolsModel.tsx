export interface ISymbols {
  symbol: string;
  base_asset: string;
  quote_asset: string;
  base_precision: number;
  quote_precision: number;
  min_notional: number;
  min_lot_size: number;
  is_favorite: boolean;
}
