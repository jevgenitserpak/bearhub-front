import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BaseService {

  constructor(protected http: HttpClient) { }

  getText(url: string): Promise<string> {
    return this.http.get(environment.api + url, { responseType: 'text' }).toPromise();
  }

  getExternalPromiseAsJson(url: string): Promise<any> {
    return this.http.get(url, { responseType: 'json' }).toPromise();
  }

}
