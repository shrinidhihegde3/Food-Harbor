import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.css']
})
export class DonateFormComponent {
    @Input() visible: boolean =false;
    values: string[] | undefined;
    date: Date | undefined;
}
