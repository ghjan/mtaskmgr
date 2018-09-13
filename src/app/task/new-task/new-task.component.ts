import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styles: []
})
export class NewTaskComponent implements OnInit {
  priorities = [
    {
      label: '紧急',
      value: 1,
    },
    {
      label: '重要',
      value: 2,
    },
    {
      label: '普通',
      value: 3,
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
