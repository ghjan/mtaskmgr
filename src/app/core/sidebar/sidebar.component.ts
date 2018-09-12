import {Component, OnInit} from '@angular/core';
import {getDate} from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
    mat-icon {
      align-self: start;
    }
  `]
})
export class SidebarComponent implements OnInit {

  today = 'day';

  constructor() {
    this.today = `day${getDate(new Date())}`;
  }

  ngOnInit() {
  }

}
