import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styles: []
})
export class QuickTaskComponent implements OnInit {

  desc: string;
  @Output() quickTask = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('keyup.enter')
  sendQuickTask() {
    if (!this.desc || this.desc.length === 0 || !this.desc.trim() || this.desc.length > 20) {
      return;
    }
    this.quickTask.emit(this.desc);
    // this.desc = '';
  }

  submit(formData, ev: Event) {
    // submit有时候会默认刷新网页
    ev.preventDefault();
    console.log(JSON.stringify(formData.value));
    console.log(JSON.stringify(formData.valid));
  }

}
