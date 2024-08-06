import { Component, HostListener, OnInit } from '@angular/core';
import { NgFor, NgIf } from "@angular/common";


import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./http.service";


import { SliderDirective } from './slider.directive';


export class Content {
  constructor(
    public id: string,
    public media_type: string,
    public media_url: string,
    public caption: string,
    public timestamp: string,
    public permalink: string,
    public children: {
      data: [
        {
          media_url: string,
          permalink: string,
          id: string,

        }
      ];
    },
    public thumbnail_url: string,
  ) { }
}




@Component({
  selector: 'app-service-articles',
  standalone: true,
  templateUrl: './service-articles.component.html',
  styleUrls: ['./service-articles.component.css', './service-articles.component.adaptive.css'],
  imports: [NgFor, NgIf, SliderDirective, HttpClientModule],
  providers: [HttpService]
})

export class ServiceArticlesComponent implements OnInit {

  constructor(
    private httpService: HttpService
  ) { }

  scrollHeight: number = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  @HostListener('document:scroll', ['$event'])
  getScale() {
    let x;
    if (window.scrollY < this.scrollHeight) {
      x = 1 + 0.0001 * window.scrollY;
      return `scale(${x})`;
    }
    return `scale(${x})`;
  }


  contentData: Content[] = [];

  ngOnInit() {

    this.httpService.getDataInstagram().subscribe({
      next: (data: any) => {
        this.contentData = data;
      }
    });

  }
  

}