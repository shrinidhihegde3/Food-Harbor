import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent {
     @Input() showDetails: boolean |undefined = false;

    show(){
      this.showDetails = !this.showDetails;
    }
  }
