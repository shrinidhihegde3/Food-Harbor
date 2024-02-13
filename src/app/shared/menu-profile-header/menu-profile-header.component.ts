
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-profile-header',
  templateUrl: './menu-profile-header.component.html',
  styleUrls: ['./menu-profile-header.component.css']
})
export class MenuProfileHeaderComponent {
  constructor(private appComp: AppComponent,private authService: AuthService,private router: Router) { }
    sideBarOpen: boolean = false;
    sideBarToggler(){
      this.sideBarOpen = !this.sideBarOpen;
    }
    logo="../../assets/images/logo.jpg";

    signOut(){
      this.authService.signOut().then(() => {
        this.appComp.isLoggedIn();
        this.router.navigate(['/']); 
      });
    }
}
