import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-donate-card',
  templateUrl: './donate-card.component.html',
  styleUrls: ['./donate-card.component.css']
})
export class DonateCardComponent {
    @Input() progress: string | undefined;
    @Input() title: string | undefined;
    @Input() description: string | undefined;
    @Input() image: string | undefined;
    @Input() special: string | undefined;
    @Input() Quantity: string | undefined;
    @Input() pickup: string | undefined;
    @Input() expiry: string | undefined;
    @Input() pickuptime: string | undefined;
  

    showMore: boolean = false;
    show(){
      this.showMore = !this.showMore;
      console.log(this.acceptedBy[0]);
    }
    @Input() acceptedBy: any | undefined;
}
