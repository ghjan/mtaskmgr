import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styles: [
      `
      .mat-icon, .material-icon {
        line-height: 1;
      }

      .fill {
        flex: 1;
        text-align: center;
      }

      .header-container {
        width: 100%;
      }
    `
  ],
})
export class TaskHeaderComponent implements OnInit {
  @Input() header = '';
  @Output() newTaskEvent = new EventEmitter<void>();
  @Output() moveAllTasksEvent = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  newTaskEmit() {
    this.newTaskEvent.emit();
  }

  moveAllEmit() {
    this.moveAllTasksEvent.emit();
  }
}
