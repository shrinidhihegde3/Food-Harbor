import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenuDonationService } from '../services/menu-donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent {

  constructor(private _authService: AuthService, private _donationService: MenuDonationService) { }
  donationData: any;

  async ngOnInit() {
    const user = await this._authService.getUserEmail();
    console.log("user uid",user);
    this.getDonations(user?.uid);
  }

  getDonations(uid: any) {
    this._donationService.getDonationsByUser(uid).subscribe((data: any) => {
      this.donationData = data;
      console.log("data", data);
    });
  }

  // getAllDonations() {
  //   this._donationService.getAllDonations().subscribe((data: any) => {
  //     this.donationData = data;
  //     console.log("data", data);
  //   });
  // }

}
