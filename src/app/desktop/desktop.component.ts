import {Component, OnInit} from '@angular/core';
import {Quote} from './dto/quotes.type';
import {BaseService} from '../services/base.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  qod: Quote;
  category: string;

  quoteCategories = ['inspire', 'management', 'sports', 'life', 'funny', 'love', 'art', 'students'];

  constructor(private http: BaseService) {}

  ngOnInit(): void {
    this.initializeQuote();
  }

  initializeQuote() {
    if (this.category === undefined || this.category == null) {
      this.category = this.quoteCategories[0];
    } else {
      const index = this.quoteCategories.indexOf(this.category);
      if (index === this.quoteCategories.length - 1) {
        this.category = this.quoteCategories[0];
      } else {
        this.category = this.quoteCategories[index + 1];
      }
    }
    this.http.getExternalPromiseAsJson('https://quotes.rest/qod?category=' + this.category + '&language=en').then(res => {
      this.qod = res.contents.quotes[0];
    });
  }

  refreshQuote() {
    this.initializeQuote();
  }
}
