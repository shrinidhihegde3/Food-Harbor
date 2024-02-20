import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-donate-card',
  templateUrl: './donate-card.component.html',
  styleUrls: ['./donate-card.component.css']
})
export class DonateCardComponent {
    @Input() progress: string | undefined;
    @Input() title: string | undefined;
}
