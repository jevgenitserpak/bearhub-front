import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Sort} from '@angular/material/sort';
import {SymbolItem} from '../dto/stock-items.type';
import {StockmarketService} from '../stockmarket.service';
import {StockProfileComponent} from '../stock-profile/stock-profile.component';
import {LoadingService} from '../../common/loading/loading.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {


  baseList: Array<SymbolItem>;
  sortedList: Array<SymbolItem>;
  pageData: Array<SymbolItem>;
  currentPage = 1;
  itemsPerPage = 15;
  maxPage = 1;

  searchTerm: string;
  minPrice: number;
  maxPrice: number;
  minVolume: number;
  minChangePercentage;

  constructor(private service: StockmarketService,
              private loadingService: LoadingService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadingService.show();
    this.service.getBaseSymbolsList().then(result => {
      this.baseList = result.symbolsList;
      this.initSymbolStats();
      this.sortedList = this.baseList;
      this.pageData = this.sortedList.slice(0, this.itemsPerPage);
      if (result.symbolsList.length <= this.itemsPerPage) {
        this.currentPage = undefined;
      } else {
        this.maxPage = Math.ceil(this.baseList.length / this.itemsPerPage);
      }
    });
  }

  initList() {
    this.filterBaseList();
    this.sortedList = this.baseList;
    this.pageData = this.sortedList.slice(0, this.itemsPerPage);
    if (this.baseList.length <= this.itemsPerPage) {
      this.currentPage = undefined;
    } else {
      this.maxPage = Math.ceil(this.baseList.length / this.itemsPerPage);
    }
  }

  private async initSymbolStats() {
    for (let i = 0; i < this.baseList.length; i += 800) {
      const start = i;
      const end = i + 800 >= this.baseList.length ? this.baseList.length - 1 : i + 800;
      console.log('start:' + start, ' end:' + end);
      console.log(this.baseList.length);
      const partList = this.baseList.slice(start, end);
      const test = partList.map( item => item.symbol);
      await this.service.getSymbolStats(partList.map( item => item.symbol)).then(result => {
        result.forEach(stat => {
          const symbolItem = this.baseList.find(item => item.symbol === stat.symbol);
          if (symbolItem !== undefined) {
            symbolItem.stats = stat;
          }
        });
      });
    }
    this.initList();
    this.loadingService.hide();
  }

  private filterBaseList() {
    this.baseList = this.baseList.filter(item =>
      item.price > 0
      && item.name !== undefined
      && item.name !== ''
      && item.stats !== undefined
      && item.stats.volume !== undefined
      && item.stats.changesPercentage !== undefined
      && item.stats.volume > 0);
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

  toggleProfile(symbol: SymbolItem) {
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

  openDialog(symbol: SymbolItem) {
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
    this.sortedList = this.sortedList.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'symbol': return this.compare(a.symbol, b.symbol, isAsc);
        case 'changesPercentage': return this.compare(a.stats.changesPercentage, b.stats.changesPercentage, isAsc);
        case 'volume': return this.compare(a.stats.volume, b.stats.volume, isAsc);
        case 'price': return this.compare(a.price, b.price, isAsc);
        default: return 0;
      }
    });
    this.currentPage = 1;
    this.filterPageData();
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
      if (this.minVolume !== undefined && this.minVolume > 0) {
        if (item.stats.volume === undefined || item.stats.volume < this.minVolume) {
          return false;
        }
      }
      if (this.minChangePercentage !== undefined && this.minChangePercentage > 0) {
        if (item.stats.changesPercentage === undefined || Math.abs(item.stats.changesPercentage) < this.minChangePercentage) {
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
