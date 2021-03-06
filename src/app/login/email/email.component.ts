import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailComponent),
      multi: true
    }
  ]
})
export class EmailComponent implements OnInit, ControlValueAccessor {
  val = '';

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {

  };


  onTouched = (val) => {};

  set value(val) {
    this.val = val;
    this.onChange(val);
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  private propagateChange = (_: any) => { };

}
