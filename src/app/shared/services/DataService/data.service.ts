import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue: null
})
export class DataService {
  constructor(private url : string, private httpClient : HttpClient) { }

  getAllData() {
    return this.httpClient.get(this.url);
  }

  create(data : any) {
    return this.httpClient.post(this.url, data);
  }

  patch(id: string | number, data : any, header : any) {
    header : header || {}
    return this.httpClient.patch(this.url+'/'+id, data, header);
  }

  delete(id : number) {
    return this.httpClient.delete(this.url+"/"+id);
  }


}
