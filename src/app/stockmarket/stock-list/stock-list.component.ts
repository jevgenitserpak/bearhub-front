import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Sort} from '@angular/material/sort';
import {BaseSymbolItem} from '../dto/stock-items.type';
import {StockmarketService} from '../stockmarket.service';
import {StockProfileComponent} from '../stock-profile/stock-profile.component';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  isLoading = true;
  baseList: Array<BaseSymbolItem>;
  sortedList: Array<BaseSymbolItem>;
  pageData: Array<BaseSymbolItem>;
  currentPage = 1;
  itemsPerPage = 15;
  maxPage = 1;

  searchTerm: string;
  minPrice: number;
  maxPrice: number;

  constructor(private service: StockmarketService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.service.getBaseSymbolsList().then(result => {
      this.baseList = result.symbolsList;
      this.filterBaseList();
      this.sortedList = this.baseList;
      this.pageData = this.sortedList.slice(0, this.itemsPerPage);
      if (result.symbolsList.length <= this.itemsPerPage) {
        this.currentPage = undefined;
      } else {
        this.maxPage = Math.ceil(this.baseList.length / this.itemsPerPage);
      }
      this.isLoading = false;
    });
  }

  private filterBaseList() {
    this.baseList = this.baseList.filter(item => item.price > 0 && item.name !== undefined && item.name !== '');
  }

  filterPageData() {
    const endIndex = this.currentPage * this.itemsPerPage;
    const startIndex = endIndex - this.itemsPerPage;
    this.pageData = this.sortedList.slice(startIndex, endIndex);
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
        this.openDialog(symbol);
      });
    } else {
      this.openDialog(symbol);
    }
  }

  openDialog(symbol: BaseSymbolItem) {
    const dialogRef = this.dialog.open(StockProfileComponent, {
      width: '500px',
      data: symbol
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // this.animal = result;
    });
  }

  sortData(sort: Sort) {
    console.log(sort);
    if (!sort.active || sort.direction === '') {
      this.sortedList = this.baseList;
      this.filterPageData();
      return;
    }
    this.isLoading = true;
    this.sortedList = this.sortedList.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'symbol': return this.compare(a.symbol, b.symbol, isAsc);
        case 'price': return this.compare(a.price, b.price, isAsc);
        default: return 0;
      }
    });
    this.currentPage = 1;
    this.filterPageData();
    this.isLoading = false;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  applyFilter() {
    this.sortedList = this.baseList.filter(item => {
      if (this.minPrice !== undefined && this.minPrice > 0) {
        if (item.price < this.minPrice) {
          return false;
        }
      }
      if (this.maxPrice !== undefined && this.maxPrice > 0) {
        if (item.price > this.maxPrice) {
          return false;
        }
      }
      if (this.searchTerm !== undefined && this.searchTerm.length > 0) {
        if (!item.symbol.toLowerCase().includes(this.searchTerm.toLowerCase())
          && !item.name.toLowerCase().includes(this.searchTerm.toLowerCase())) {
          return false;
        }
      }
      return true;
    });
    this.maxPage = Math.ceil(this.sortedList.length / this.itemsPerPage);
    this.currentPage = 1;
    this.filterPageData();
  }
}
