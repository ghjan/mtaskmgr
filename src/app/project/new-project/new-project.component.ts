import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NewProjectComponent implements OnInit {
  title = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data, private dialogRef: MatDialogRef<NewProjectComponent>
  ) {
  }

  ngOnInit() {
    this.title = this.data.title;
    console.log(JSON.stringify(this.data));
  }

  save() {
    this.dialogRef.close('I receive your message');
  }

}
