import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {card_anim} from '../../anims/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styles: [],
  animations: [
    card_anim,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProjectItemComponent implements OnInit {

  @Input() item: any;
  @Output() inviteEvent = new EventEmitter<void>();
  @Output() editProjectEvent = new EventEmitter<void>();
  @Output() deleteProjectEvent = new EventEmitter<void>();

  @HostBinding('@card') card_state = 'out';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.card_state = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeaver() {
    this.card_state = 'out';
  }

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
