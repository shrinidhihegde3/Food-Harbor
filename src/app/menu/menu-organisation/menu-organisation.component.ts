import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-organisation',
  templateUrl: './menu-organisation.component.html',
  styleUrls: ['./menu-organisation.component.css']
})
export class MenuOrganisationComponent {
    organisations:any = [
      {
        name: "Organisation 1",
        description: "This is the description for organisation 1",
        link: "http://www.organisation1.com",
        phone: "1234567890",
        email: "",
        address: "1234 Street Name, City, Country",
        Ratings: "5",
      },
      {
        name: "Organisation 2",
        description: "This is the description for organisation 2",
        link: "http://www.organisation2.com",
        phone: "1234567890",
        email: "",
        address: "1234 Street Name, City, Country",
        Ratings: "4",
      },
      {
        name: "Organisation 3",
        description: "This is the description for organisation 3",
        link: "http://www.organisation3.com",
        phone: "1234567890",
        email: "",
        address: "1234 Street Name, City, Country",
        Ratings: "3",
      }
    ];
}