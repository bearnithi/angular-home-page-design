import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  links: Array<any>;
  constructor() { }

  ngOnInit() {
    this.links = [
      'Technical Security',
      'Data Securiy',
      'Facebook',
      'Twitter',
      'Mobile Firewall'
    ]
  }

}
