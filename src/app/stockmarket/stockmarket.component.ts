import { Component, OnInit } from '@angular/core';
import {StockmarketService} from './stockmarket.service';
import {SymbolItem, SymbolProfile} from './dto/stock-items.type';
import {MatDialog} from '@angular/material/dialog';
import {StockProfileComponent} from './stock-profile/stock-profile.component';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-stockmarket',
  templateUrl: './stockmarket.component.html',
  styleUrls: ['./stockmarket.component.scss']
})
export class StockmarketComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }
}
