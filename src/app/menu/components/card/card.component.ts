import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
nullUser:string = "../../../../assets/images/nullUser.png";

@Input() title: string | undefined;
@Input() imgUrl: string | undefined;
// @Input() title: string | undefined;

}
