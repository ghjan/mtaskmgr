import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styles: []
})
export class ProjectItemComponent implements OnInit {

  @Input() item: any;
  @Output() inviteEvent = new EventEmitter<void>();
  @Output() editProjectEvent = new EventEmitter<void>();
  @Output() deleteProjectEvent = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  invite() {
    this.inviteEvent.emit();
  }

  editProjectEmit() {
    this.editProjectEvent.emit();
  }

  deleteProjectEmit() {
    this.deleteProjectEvent.emit();
  }
}
