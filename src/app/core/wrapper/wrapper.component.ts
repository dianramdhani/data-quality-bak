import { Component, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import { Menu, Type } from './menu.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WrapperComponent implements AfterViewInit {
  @Input() menus: Menu[];
  type = Type;

  ngAfterViewInit() {
    require('../../../themes/dashforge/assets/js/dashforge.aside.js');
    console.log(this.menus);
  }

}
