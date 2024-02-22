import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenuDonationService } from '../services/menu-donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent {
  donations: any = [
    {
      progress: '50%',
      title: 'Food',
      description: 'This is a description of the food donation',
      image: 'assets/donate-food.jpg',
      special: 'Special Instructions',
      Quantity: 'Quantity',
      pickup: 'Pickup',
      expiry: 'Expiry',
      pickuptime: 'Pickup Time',
      acceptedBy: [
        {
          organisation: 'Organisation 1',
        }

      ]
    },
    {
      progress: '50%',
      title: 'Clothes',
      description: 'This is a description of the clothes donation',
      image: 'assets/donate-clothes.jpg',
      special: 'Special Instructions',
      Quantity: 'Quantity',
      pickup: 'Pickup',
      expiry: 'Expiry',
      pickuptime: 'Pickup Time',
      acceptedBy: [
        {
          organisation: 'Organisation 2',
        }
      ]
    },
    {
      progress: '50%',
      title: 'Books',
      description: 'This is a description of the books donation',
      image: 'assets/donate-books.jpg',
      special: 'Special Instructions',
      Quantity: 'Quantity',
      pickup: 'Pickup',
      expiry: 'Expiry',
      pickuptime: 'Pickup Time',
      acceptedBy: [
        {
          organisation: 'Organisation 3',
        }
      ]
    },
    {
      progress: '50%',
      title: 'Toys',
      description: 'This is a description of the toys donation',
      image: 'assets/donate-toys.jpg',
      special: 'Special Instructions',
      Quantity: 'Quantity',
      pickup: 'Pickup',
      expiry: 'Expiry',
      pickuptime: 'Pickup Time',
      acceptedBy: [
        {
          organisation: 'Organisation 4',
        }
      ]
    },
    {
      progress: '50%',
      title: 'Money',
      description: 'This is a description of the money donation',
      image: 'assets/donate-money.jpg',
      special: 'Special Instructions',
      Quantity: 'Quantity',
      pickup: 'Pickup',
      expiry: 'Expiry',
      pickuptime: 'Pickup Time',
      acceptedBy: [
        {
          organisation: 'Organisation 5',
        }
      ]
    },
    {
      progress: '50%',
      title: 'Furniture',
      description: 'This is a description of the furniture donation',
      image: 'assets/donate-furniture.jpg',
      special: 'Special Instructions',
      Quantity: 'Quantity',
      pickup: 'Pickup',
      expiry: 'Expiry',
      pickuptime: 'Pickup Time',
      acceptedBy: [
        {
          organisation: 'Organisation 6',
        }
      ]
    }
  ];

  constructor(private _authService: AuthService, private _donationService: MenuDonationService) { }
  donationData: any;

  async ngOnInit() {
    const user = await this._authService.getUserEmail();
    console.log("user uid",user?.uid);
    this.getDonations(user?.uid);
  }

  getDonations(uid: any) {
    this._donationService.getDonationsByUser(uid).subscribe((data: any) => {
      this.donationData = data;
      console.log("data", data);
    });
  }

}
