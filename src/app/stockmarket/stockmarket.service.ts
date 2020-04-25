import { Injectable } from '@angular/core';
import {BaseService} from '../services/base.service';
import {HttpClient} from '@angular/common/http';
import {BaseSymbolItem, SymbolProfile} from './dto/stock-items.type';

@Injectable({
  providedIn: 'root'
})
export class StockmarketService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  getBaseSymbolsList(): Promise<any> {
    return this.getExternalPromiseAsJson('https://financialmodelingprep.com/api/v3/company/stock/list');
  }

  getSymbolProfile(symbol: string): Promise<any> {
    return this.getExternalPromiseAsJson('https://financialmodelingprep.com/api/v3/company/profile/' + symbol);
  }

}
