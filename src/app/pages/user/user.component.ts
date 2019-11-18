import { Component, OnInit } from '@angular/core';

import { Menu, Type } from '../../core/wrapper/menu.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  menu: Menu[];
  constructor() {
    this.menu = [
      {
        type: Type.LINK,
        label: 'testing',
        icon: 'monitor',
        state: {
          to: 'testing',
          params: {}
        },
        active: true
      }
    ];
  }

  ngOnInit() {
  }

}
