import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styles: [
      `
      .card {
        height: 360px;
        flex: 0 0 360px;
        margin: 10px;
      }

      :host {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .fab-button {
        position: fixed;
        right: 32px;
        bottom: 96px;
        z-index: 998;
      }
    `
  ]
})
export class ProjectListComponent implements OnInit {
  projects = [{
    'name': '企业协作平台',
    'desc': '这是一个企业内部项目',
    'coverImg': 'assets/img/covers/0.jpg',
  }, {
    'name': '自动化测试项目',
    'desc': '这是一个企业内部项目',
    'coverImg': 'assets/img/covers/1.jpg',
  },
  ];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: 'dd'});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
