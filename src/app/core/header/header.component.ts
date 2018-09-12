import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarktheme = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  openSidebar() {
    this.toggle.emit();
  }

  onChange(checked: boolean) {
    this.toggleDarktheme.emit(checked);
  }
}
