import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WrapperComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    require('../../../themes/dashforge/assets/js/dashforge.aside.js');
  }

}
