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
      width: 38em;
      height: 40em;
    }
  `
  ]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  items: string[];
  private readonly avatarName = 'avatars';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    const img = `${this.avatarName}:svg-${(Math.random() * 16).toFixed()}`;
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    this.items = nums.map(d => `avatars:svg-${d}`);

    this.form = this.fb.group({
      email: ['wpcfan@163.com', Validators.compose([Validators.required, Validators.email])],
      name: ['dd', Validators.required],
      password: ['wp123456', Validators.required],
      repeat: [],
      avatar: [img],
      dateOfBirth: [],
    });

  }

  onSubmit(form, event: Event) {
    event.preventDefault();  // 防止表单提交的默认行为
    if (!form.valid) {
      return;
    }
    console.log(form.value);


  }
}
