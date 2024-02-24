import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Donation } from 'src/app/shared/models/models';
import { MenuDonationService } from '../../services/menu-donation.service';
import { AuthService } from 'src/app/services/auth.service';
import { DonationComponent } from '../donation.component';

@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.css']
})
export class DonateFormComponent {
  @Input() visible: boolean = false;
  selectedFile: File | null = null;

  constructor(private _donationService: MenuDonationService, private _authService: AuthService) { }

  donation: Donation = {
    description: '',
    quantity: 0,
    pickupDate: new Date(),
    photo: '',
    pickupTime: '',
    expiryDate: new Date(),
    instruction: '',
    approached: [
      {
        uid: '',
        name: '',
        profileImg: ''
      }
    ],
    progress: false
  };

  onUpload(event: any) {
    // console.log('File:', event.files[0]);
    this.selectedFile = event.files[0];
  }

  async onSubmit() {
    console.log('Donation:', this.donation);
    const uploadedFile = await this._donationService.upLoadDonationImage(this.selectedFile);
    // console.log('Uploaded File Path:', uploadedFile);
    this.donation.photo = uploadedFile;
    const user = await this._authService.getUserEmail();
    // console.log('User:', user?.email);
    this.donation.progress = true;
    await this._donationService.upLoadDonation(this.donation, user?.uid).then(() => {
      this.visible = false;
    });
  }

  onCancel() {
    this.visible = false;
    // console.log('Cancelled');
    this.selectedFile = null;
    this.donation = {
      description: '',
      quantity: 0,
      pickupDate: new Date(),
      photo: '',
      pickupTime: '',
      expiryDate: new Date(),
      instruction: '',
      approached: [
        {
          uid: '',
          name: '',
          profileImg: ''
        }
      ],
      progress: false
    };
  }
}