import { Component, OnInit } from '@angular/core';
import { BootstrapAlertService, BootstrapAlert } from 'ngx-bootstrap-alert';
import {NewsService} from "../shared/news.service.service";
import {News} from "../shared/news";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  public news:News = new News();
  htmlContent: any;
  constructor(private newsService: NewsService,private bootstrapAlertService:BootstrapAlertService,private router:Router) { }

  ngOnInit() {
  }
  putNews(){
    this.news.content=this.htmlContent;
    console.log(this.news.content);
    this.newsService.putNews(this.news).subscribe((res)=>{
      this.bootstrapAlertService.alert(new BootstrapAlert("Succesfully Post a news!", "alert-success"));
      this.router.navigate(['/userhomepage']);
    });
  }

}
