import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../../shared/services/DataService/data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  constructor(httpClient : HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', httpClient);
  }
}
