import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BaseService {

  constructor(private http: HttpClient) { }

  getText(url: string): Promise<string> {
    return this.http.get(environment.api + '/test/hello', { responseType: 'text' }).toPromise();
  }

}
