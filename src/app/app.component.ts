import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  tabList:MenuItem[]=[];
  ngOnInit(): void {
      this.tabList=[
        {
          label:"home"
        },
        {
          label:"About Us"
        }
      ]
  }
}
