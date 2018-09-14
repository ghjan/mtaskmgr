import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {defaultRouteAnim} from '../../anims/route.anim';
import {listAnimation} from '../../anims/list.anim';

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

      .project-lists {
        min-width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        align-content: flex-start;
        overflow-x: scroll;
      }

      .fab-button {
        position: fixed;
        right: 32px;
        bottom: 96px;
        z-index: 998;
      }
    `
  ],
  animations: [
    defaultRouteAnim,
    listAnimation,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent implements OnInit {
  projects = [{
    'id': 1,
    'name': '企业协作平台',
    'desc': '这是一个企业内部项目',
    'coverImg': 'assets/img/covers/0.jpg',
  }, {
    'id': 2,
    'name': '自动化测试项目',
    'desc': '这是一个企业内部项目',
    'coverImg': 'assets/img/covers/1.jpg',
  },
  ];

  @HostBinding('@routeAnim') state;

  constructor(private dialog: MatDialog
              , private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新建项目'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.projects = [...this.projects,
          {id: 3, name: '一个新项目', coverImg: 'assets/img/covers/3.jpg', desc: '这是一个新项目'},
          {id: 4, name: '又一个新项目', coverImg: 'assets/img/covers/4.jpg', desc: '这是一个又新项目'}
        ];
        this.cd.markForCheck();
      }
    });
  }

  openInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  openUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目'}});
  }

  openDeleteProjectDialog(project) {
    const confirm = {
      title: '删除项目：',
      content: '确认要删除该项目？',
      confirmAction: '确认删除'
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {dialog: confirm}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.projects = this.projects.filter(item => item.id !== project.id);
        this.cd.markForCheck();
      }
    });
  }
}

