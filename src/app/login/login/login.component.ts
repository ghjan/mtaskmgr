import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {QuoteService} from '../../services/quote.service';
import {Quote} from '../../domain/quote.model';

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

  quote: Quote = {
    'id': '0',
    'cn': '我突然就觉得自己像个华丽的木偶,演尽了所有的悲欢离合,可是背上总是有无数闪亮的银色丝线,操纵我哪怕一举手一投足。',
    'en': 'I suddenly feel myself like a doll,acting all kinds of joys and sorrows.There are lots of shining silvery thread on my back,' +
    'controlling all my action.',
    'pic': '/assets/img/quotes/0.jpg'
  };

  constructor(private fb: FormBuilder, private quoteService$: QuoteService) {
    this.quoteService$.getQuote().subscribe(q => this.quote = q);
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
    // this.form.controls['email'].setValidators(this.validateBirthday);
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
