import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabList=
  [
    {label:'Home', routerLink: '/home'},
    {label:'About', routerLink: '/about'},
  ];

  isLoggedIn(){
    if(sessionStorage.getItem('user')){
      return true;
    }
    else{
      return false;
    }
  }
}
