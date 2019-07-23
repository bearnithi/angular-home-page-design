import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: Array<string>;
  constructor() { }

  ngOnInit() {
    this.links = [
      'Home',
      'About',
      'Features',
      'Products',
      'IT Security',
      'Contact'
    ]
  }

}
