import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-donation',
  templateUrl: './menu-donation.component.html',
  styleUrls: ['./menu-donation.component.css']
})
export class MenuDonationComponent {
    showdialogbox: boolean = false;
    showDialog() {
        this.showdialogbox = !this.showdialogbox;
    }  
}
