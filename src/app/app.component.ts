import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './services/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bearhub-front';

  courses: any;

  constructor(private http: BaseService) {
  }

  ngOnInit() {
    this.courses = this.http.getText('/test/hello').then(res => this.title = res);
    // console.log(this.courses);
  }
}


