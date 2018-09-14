import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {itemAnim} from '../../anims/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avatar;
  @Output() taskItemClickedEvent = new EventEmitter<void>();

  widerPriority = 'out';

  checkboxClicked(event) {
    event.stopPropagation();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.widerPriority = 'in';
  }

  @HostListener('mouseleave')
  onMouseLeaver() {
    this.widerPriority = 'out';
  }

  constructor() {
  }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  itemClicked() {
    this.taskItemClickedEvent.emit();
  }


}
