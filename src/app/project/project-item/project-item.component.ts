import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styles: []
})
export class ProjectItemComponent implements OnInit {

  @Input() item: any;

  constructor() {
  }

  ngOnInit() {
  }

}
