import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    .text-right {
      margin: 10px;
      text-align: end;
    }

    mat-card {
      width: 20em;
      height: 25em;
      /*margin: 5px 5px;*/
    }
  `],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['wpcfan@163.com', Validators.compose([Validators.required, Validators.email])],
      password: ['wp123456', Validators.required]
    });
  }

  onSubmit(form, event) {
    event.preventDefault();
    console.log(JSON.stringify(form.value));
    // 动态验证器 设置validators
    console.log(typeof(this.form.controls['email'].validator));
    // this.form.controls['email'].setValidators(this.validate);
  }

  validate(c: FormControl): { [key: string]: any } {
    if (!c.value) {
      return null;
    }
    const pattern = /^wang+/;
    if (pattern.test(c.value)) {
      return null;
    }
    return {
      emailNotValid: 'this email must start with wang'
    };
  }
}
