import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CopyTaskComponent implements OnInit {

  lists: any[];

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private dialogRef: MatDialogRef<CopyTaskComponent>) {
  }

  ngOnInit() {
    this.lists = this.data.lists;
  }
  save() {
    // @TODO to save
  }
}
