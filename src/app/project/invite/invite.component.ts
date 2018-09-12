import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatAutocomplete} from '@angular/material';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styles: []
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'zhangsan',
    },
    {
      id: 2,
      name: 'lisi',
    },
    {
      id: 3,
      name: 'wangwu',
    },
  ];
  @ViewChild('autoMember') autoMember: MatAutocomplete;

  constructor() {
  }

  ngOnInit() {
  }

  save() {

  }

  displayUser(user: { id: string, name: string }): string {
    return user ? user.name : '';
  }

}
