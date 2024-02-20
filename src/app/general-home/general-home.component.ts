import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-general-home',
  templateUrl: './general-home.component.html',
  styleUrls: ['./general-home.component.css']
})
export class GeneralHomeComponent {
  tabList=
  [
    {label:'Home', routerLink: '/home'},
    {label:'About', routerLink: '/about'},
  ];
}
