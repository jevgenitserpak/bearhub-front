export class BaseSymbolItem {
  symbol: string;
  name: string;
  price: number;
  expanded = false;
  profile: SymbolProfile;
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
