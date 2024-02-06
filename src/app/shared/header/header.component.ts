import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() logo: string='';
    @Input() logoTitle: string='';
    @Input() tabList:string[]=[];
    @Input() rightCheck:boolean=true;
    
}
