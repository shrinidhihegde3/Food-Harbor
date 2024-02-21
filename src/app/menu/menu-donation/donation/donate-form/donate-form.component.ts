import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Donation } from 'src/app/shared/models/models';
import { MenuDonationService } from '../../services/menu-donation.service';

@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.css']
})
export class DonateFormComponent {
  @Input() visible: boolean = false;
  selectedFile: File | null = null;

  constructor(private _donationService: MenuDonationService) { }

  donation: Donation = {
    description: '',
    quantity: 0,
    pickupDate: new Date(),
    photo: '',
    pickupTime: '',
    expiryDate: new Date(),
    instruction: ''
  };

  onUpload(event: any) {
    console.log('File:', event.files[0]);
    this.selectedFile = event.files[0];
  }

  async onSubmit() {
    console.log('Donation:', this.donation);
    const uploadedFile = await this._donationService.upLoadDonationImage(this.selectedFile);
    // console.log('Uploaded File Path:', uploadedFile);
    this.donation.photo = uploadedFile;
    const uploadDonation = await this._donationService.upLoadDonation(this.donation);
  }

  onCancel() {
    this.visible = false;
    console.log('Cancelled');
    this.selectedFile = null;
    this.donation = {
      description: '',
      quantity: 0,
      pickupDate: new Date(),
      photo: '',
      pickupTime: '',
      expiryDate: new Date(),
      instruction: ''
    };
  }
}