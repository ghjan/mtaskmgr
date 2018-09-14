import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  @Output() navClick = new EventEmitter<void>();

  constructor() {
    this.today = `day${getDate(new Date())}`;
  }

  ngOnInit() {
  }

  onNavClick() {
    this.navClick.emit();
  }

}
