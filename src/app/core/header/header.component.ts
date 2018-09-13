import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarEvent = new EventEmitter<void>();
  @Output() toggleDarkthemeEvent = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  sidebarEmit() {
    this.toggleSidebarEvent.emit();
  }

  darkthemeEmit(checked: boolean) {
    this.toggleDarkthemeEvent.emit(checked);
  }
}
