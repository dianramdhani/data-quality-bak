import { Component, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WrapperComponent implements AfterViewInit {
  @Input() menu: Menu[];
  constructor() { }

  ngAfterViewInit() {
    require('../../../themes/dashforge/assets/js/dashforge.aside.js');
    console.log(this.menu);
  }

}
