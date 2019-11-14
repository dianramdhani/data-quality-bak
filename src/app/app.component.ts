import { Component, AfterViewInit, AfterViewChecked } from '@angular/core';
import * as feather from 'feather-icons';

import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private config: ConfigService) {
    console.log(this.config.getConfig());
  }

  ngAfterViewInit() {
    feather.replace();
    require('../../src/themes/dashforge/assets/js/dashforge.aside.js');
  }
}
