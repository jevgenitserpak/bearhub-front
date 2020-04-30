export class SymbolItem {
  symbol: string;
  name: string;
  price: number;
  expanded = false;
  profile: SymbolProfile;
  stats: SymbolStats;
}

export class SymbolProfile {
  price: number;
  beta: string;
  volAvg: string;
  mktCap: string;
  lastDiv: string;
  range: string;
  changes: number;
  changesPercentage: string;
  companyName: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  ceo: string;
  sector: string;
  image: string;
}

export class SymbolStats {
  symbol: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  volume: number;
  vgVolume: number;
  exhange: string;
}
