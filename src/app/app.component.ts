import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabList=["Home","About Us"];

  isLoggedIn(){
    if(sessionStorage.getItem('user')){
      return true;
    }
    else{
      return false;
    }
  }
}
