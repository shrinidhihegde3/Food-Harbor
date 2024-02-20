import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
    people=[
        {
            name: 'John',
        },
        {
            name: 'Jane',
        },
        {
            name: 'John',
        },
        {
            name: 'Jane',
        }
    ]
}
