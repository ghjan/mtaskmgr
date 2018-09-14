import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {CopyTaskComponent} from '../copy-task/copy-task.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {stringify} from 'querystring';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTaskComponent implements OnInit {
  title = '';
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

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private dialogRef: MatDialogRef<CopyTaskComponent>) {
  }

  ngOnInit() {
    this.title = this.data.title;
    console.log(stringify(this.data.task));
  }

}
