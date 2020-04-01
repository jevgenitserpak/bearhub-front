import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bearhub-front';

  courses: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.courses = this.http
      .get('/test/hello', { responseType: 'text' }).toPromise().then(res => this.title = res);
    // console.log(this.courses);
  }
}


