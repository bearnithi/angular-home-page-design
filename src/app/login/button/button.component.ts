import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() btnclick: EventEmitter<any> = new EventEmitter();
  @Input() disabled: boolean;
  constructor() { }

  ngOnInit() {
  }

}
