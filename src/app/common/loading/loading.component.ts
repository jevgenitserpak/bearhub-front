import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {LoadingService} from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  isLoading: Subject<boolean> = this.loadingService.isLoading;
  loading: boolean;

  constructor(private loadingService: LoadingService) {
    this.isLoading.subscribe(data => this.loading = data);
  }

  public ngOnInit() {
  }
}
