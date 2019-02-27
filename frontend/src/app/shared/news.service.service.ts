import { Injectable } from '@angular/core';
import {News} from "./news";
import { HttpClient , HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsService {

  public selectedNews:News = new News();
  public news:News[];

  constructor(private http: HttpClient) { }


  putNews(news:News){
    console.log(news);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/news/create', news, {headers: headers});
  }


  getNews(){
    return this.http.get('http://localhost:3000/news/news');
  }
}
