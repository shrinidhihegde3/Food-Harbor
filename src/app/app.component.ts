import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  rightCheck: boolean = true;
  imageUrl: any;
  profileName: string = '';

  constructor() { }
  tabList = [
    { label: 'Home', routerLink: '/home' },
    { label: 'About', routerLink: '/about' },
  ];

  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn() {
    const user = sessionStorage.getItem('user');

    if (user) {
      this.rightCheck = false;
      this.imageUrl = JSON.parse(user).photoURL ?? '../assets/images/nullUser.png';
      this.profileName = JSON.parse(user).displayName;
      return true;
    }
    else {
      this.rightCheck = true;
      return false;
    }
  }

}
