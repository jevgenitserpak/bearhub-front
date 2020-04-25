import { Component, OnInit } from '@angular/core';
import {StockmarketService} from './stockmarket.service';
import {BaseSymbolItem, SymbolProfile} from './dto/stock-items.type';
import {MatDialog} from '@angular/material/dialog';
import {StockProfileComponent} from './stock-profile/stock-profile.component';

@Component({
  selector: 'app-stockmarket',
  templateUrl: './stockmarket.component.html',
  styleUrls: ['./stockmarket.component.scss']
})
export class StockmarketComponent implements OnInit {

  isLoading = true;
  baseList: Array<BaseSymbolItem>;
  pageData: Array<BaseSymbolItem>;
  currentPage = 1;
  itemsPerPage = 15;
  maxPage = 1;

  constructor(private service: StockmarketService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.service.getBaseSymbolsList().then(result => {
      this.baseList = result.symbolsList;
      this.pageData = result.symbolsList.slice(0, this.itemsPerPage);
      if (result.symbolsList.length <= this.itemsPerPage) {
        this.currentPage = undefined;
      } else {
        this.maxPage = Math.ceil(this.baseList.length / this.itemsPerPage);
      }
      this.isLoading = false;
    });
  }

  filterPageData() {
    const endIndex = this.currentPage * this.itemsPerPage;
    const startIndex = endIndex - this.itemsPerPage;
    this.pageData = this.baseList.slice(startIndex, endIndex);
  }

  previousPage() {
    this.currentPage -= 1;
    this.filterPageData();
  }

  nextPage() {
    this.currentPage += 1;
    this.filterPageData();
  }

  toggleProfile(symbol: BaseSymbolItem) {
    symbol.expanded = !symbol.expanded;
    if (symbol.profile === undefined) {
      this.service.getSymbolProfile(symbol.symbol).then(result => {
        symbol.profile = result.profile;
        this.openDialog(symbol.profile);
      });
    } else {
      this.openDialog(symbol.profile);
    }
  }

  openDialog(profile: SymbolProfile) {
    const dialogRef = this.dialog.open(StockProfileComponent, {
      width: '500px',
      data: profile
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // this.animal = result;
    });
  }
}
