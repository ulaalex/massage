import { Component, OnInit } from '@angular/core';

import * as f from 'swiped-events';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.adaptive.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    return f;
  }

}
