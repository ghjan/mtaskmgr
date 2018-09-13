import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']

})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avatar;
  @Output() taskItemClickedEvent = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  itemClicked() {
    this.taskItemClickedEvent.emit();
  }

  checkboxClicked(event) {
    event.stopPropagation();
  }
}
