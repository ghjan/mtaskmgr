import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NewTaskListComponent implements OnInit {

  title = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private dialogRef: MatDialogRef<NewTaskListComponent>) {
  }

  ngOnInit() {
    this.title = this.data.title;
  }

  save() {
    // @TODO to save
  }
}
