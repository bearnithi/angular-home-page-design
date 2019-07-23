import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-footer-list',
  templateUrl: './footer-list.component.html',
  styleUrls: ['./footer-list.component.scss']
})
export class FooterListComponent implements OnInit {
  @Input() links: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
