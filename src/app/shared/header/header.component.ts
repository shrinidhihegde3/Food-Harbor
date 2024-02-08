import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() logo: string='';
    @Input() logoTitle: string='';
    @Input() tabList:MenuItem[]=[];
    @Input() rightCheck:boolean=true;
    
}
