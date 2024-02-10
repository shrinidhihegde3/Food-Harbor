import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( private authService: AuthService, private router: Router,private appComp: AppComponent) { }
    // @Input() logo: string='';
    @Input() logoTitle: string='';
    @Input() tabList:MenuItem[]=[];
    @Input() rightCheck:boolean=false;
    @Input() imageUrl: any;
    @Input() profileName: string='';
    
    logo: string = '../../../assets/images/logo final.03 (1).jpg';

    signIn(){
      console.log('button clicked');
      this.authService.googleSignin().then(() => {
        this.appComp.isLoggedIn();
      });
    }

    signOut(){
      this.authService.signOut().then(() => {
        this.appComp.isLoggedIn();
        // this.router.navigate(['/']); 
      });
    }

}
