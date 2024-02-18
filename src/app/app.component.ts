import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  rightCheck: boolean = true;
  imageUrl: any;
  profileName: string = '';
  tabList: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn() {
    const user = localStorage.getItem('user');

    if (user) {
      this.rightCheck = false;
      this.imageUrl = JSON.parse(user).photoURL ?? '../assets/images/nullUser.png';
      this.profileName = JSON.parse(user).displayName;
      this.tabList = [
        { label: 'Home', routerLink: '/menu/home' },
        { label: 'Donation', routerLink: '/menu/donation' },
        { label: 'Organisation', routerLink: '/menu/organisation' },
        { label: 'Article', routerLink: '/menu/article' },
        { label: 'Profile', routerLink: '/menu/profile/myprofile' },
      ]
      return true;
    }
    else {
      this.tabList = [
        { label: 'Home', routerLink: '/home' },
        { label: 'About', routerLink: '/about' },
      ];
      this.rightCheck = true;
      return false;
    }
  }

  isProfileRoute(): boolean {
    return this.router.url.includes('/profile');
  }

  
}
