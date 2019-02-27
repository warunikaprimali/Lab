import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../shared/news.service.service";
import {News} from "../../shared/news";

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.component.html',
  styleUrls: ['./user-news.component.css'],
  providers:[NewsService]
})
export class UserNewsComponent implements OnInit {

  constructor(private newsService:NewsService) { }


  ngOnInit() {
    this.getNews()
  }

  getNews(){
    this.newsService.getNews().subscribe((res)=>{
      this.newsService.news=res as News[];
    })
  }


}
