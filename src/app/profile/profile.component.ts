import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    sideBarOpen: boolean = false;
    sideBarToggler(){
      this.sideBarOpen = !this.sideBarOpen;
    }
}
