import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  features: Array<any>;
  products: Array<any>;
  selectedFeature: number = 1;
  selectedProduct: number = 0;
  constructor() { }

  ngOnInit() {
    this.features = [{
      img: '../../../assets/images/data security.png',
      name: 'Techinal Security'
    },
    {
      img: '../../../assets/images/technical security.png',
      name: 'Data Security'
    },
    {
      img: '../../../assets/images/identity theft.png',
      name: 'Identity Theft Prevention'
    }
    ];

    this.products = [{
      img: '../../../assets/images/office-broadband.png',
      name: 'Home / Office Broadband Wireless Router with IPS',
      btn: true
    },
    {
      img: '../../../assets/images/personal-firewall.png',
      name: 'USB Personal Firewall',
      btn: true
    },
    {
      img: '../../../assets/images/mobile-firewall.png',
      name: 'Mobile Firewall with Battery Case',
      btn: true
    }
    ]
  }

}
