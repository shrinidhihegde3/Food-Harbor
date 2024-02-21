import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-organisation-card',
  templateUrl: './organisation-card.component.html',
  styleUrls: ['./organisation-card.component.css']
})
export class OrganisationCardComponent {
    @Input() organisation: String | undefined;
    @Input() description: String | undefined;
    @Input() link: String | undefined;
    @Input() phone: String | undefined;
    @Input() email: String | undefined;
    @Input() address: String | undefined;
    @Input() Ratings: String | undefined;
}
