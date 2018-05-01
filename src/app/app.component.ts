import { Component } from '@angular/core';
import * as dr from 'devexpress-reporting/dx-web-document-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a';
  html = dr.Html;

  constructor() {
    console.log(this.html);
  }
}
