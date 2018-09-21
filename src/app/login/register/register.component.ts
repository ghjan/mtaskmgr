import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {getDate} from 'date-fns';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
    mat-icon.avatar {
      overflow: hidden;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin: 12px;
    }

    mat-card {
      width: 20em;
      height: 40em;
    }
  `
  ]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  items: string[];

  constructor(private fb: FormBuilder) {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    this.items = nums.map(d => `avatars:svg-${d}`);
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['wpcfan@163.com', Validators.compose([Validators.required, Validators.email])],
      name: ['dd', Validators.required],
      password: ['wp123456', Validators.required],
    });
  }

  onSubmit(form, event) {

  }
}
