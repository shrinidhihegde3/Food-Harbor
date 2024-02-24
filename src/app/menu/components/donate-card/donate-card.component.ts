import { Component, Input } from '@angular/core';
import { Donation } from 'src/app/shared/models/models';
import { MenuDonationService } from '../../menu-donation/services/menu-donation.service';

@Component({
  selector: 'app-donate-card',
  templateUrl: './donate-card.component.html',
  styleUrls: ['./donate-card.component.css']
})
export class DonateCardComponent {
    @Input() title: string | undefined;
    @Input() donationData: any;
  
    constructor(private _donationService: MenuDonationService) { }

    showMore: boolean = false;
    show(){
      this.showMore = !this.showMore;
      // console.log(this.acceptedBy[0]);
    }

}
