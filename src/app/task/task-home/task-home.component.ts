import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styles: [
      `
      .task-lists {
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

      :host {
        width: 100%;
        height: 100%;
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
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      'id': 1,
      'name': '待办',
      'tasks': [
        {
          'desc': '吃晚餐',
          'taskListId': 'BkenST66lb',
          'ownerId': '37489e0c-df34-c261-71c4-ce75357e3035',
          'completed': true,
          'participantIds': [
            'BkkDvwee-',
            '37489e0c-df34-c261-71c4-ce75357e3035'
          ],
          'dueDate': null,
          'reminder': null,
          'createDate': '2017-05-17T14:10:01.159Z',
          'priority': 3,
          'order': 1,
          'remark': '',
          'id': 1
        },
        {
          'id': 2,
          'desc': '赶快出发去万达',
          'taskListId': 'SkG3Ba6Tgb',
          'ownerId': '37489e0c-df34-c261-71c4-ce75357e3035',
          'completed': false,
          'participantIds': [
            '37489e0c-df34-c261-71c4-ce75357e3035'
          ],
          'dueDate': '2017-06-12T16:00:00.000Z',
          'reminder': '2017-07-18T16:00:00.000Z',
          'createDate': '2017-05-19T10:03:58.794Z',
          'priority': 2,
          'order': 2,
          'remark': 'something'
        },
        {
          'id': 3,
          'desc': '什么情况啊',
          'taskListId': 'BkenST66lb',
          'ownerId': 'BkkDvwee-',
          'completed': false,
          'participantIds': [],
          'dueDate': '2017-06-15T16:00:00.000Z',
          'reminder': '2017-06-21T16:00:00.000Z',
          'createDate': '2017-05-23T08:21:04.445Z',
          'priority': 1,
          'remark': ''
        },
        {
          'taskListId': 'BylTyXiM-b',
          'desc': '登录鉴权过程中需携带 token 访问 API',
          'completed': false,
          'ownerId': 'BkkDvwee-',
          'participantIds': [],
          'dueDate': '2017-07-03T16:00:00.000Z',
          'priority': 2,
          'remark': '',
          'reminder': '2017-06-27T16:00:00.000Z',
          'createDate': '2017-05-24T06:11:05.625Z',
          'id': 4
        },
        {
          'taskListId': 'BylTyXiM-b',
          'desc': '首页 banner 增加 2px 的 margin',
          'completed': false,
          'ownerId': '37489e0c-df34-c261-71c4-ce75357e3035',
          'participantIds': [
            'BkkDvwee-'
          ],
          'dueDate': '2017-06-29T16:00:00.000Z',
          'priority': 3,
          'remark': '',
          'reminder': null,
          'createDate': '2017-05-24T06:12:59.718Z',
          'id': 6
        },
        {
          'taskListId': 'BkWpk7jGZb',
          'desc': '库存管理 -- 出库操作 API',
          'completed': false,
          'ownerId': 'BkkDvwee-',
          'participantIds': [
            '37489e0c-df34-c261-71c4-ce75357e3035'
          ],
          'dueDate': '2017-07-24T16:00:00.000Z',
          'priority': 2,
          'remark': '',
          'reminder': '2017-07-17T16:00:00.000Z',
          'createDate': '2017-05-24T06:14:47.575Z',
          'id': 7
        },
        {
          'taskListId': 'H1fTyXjMWW',
          'desc': '用户可以签入签出设备',
          'completed': true,
          'ownerId': '37489e0c-df34-c261-71c4-ce75357e3035',
          'participantIds': [],
          'dueDate': '2017-05-20T16:00:00.000Z',
          'priority': 1,
          'remark': '',
          'reminder': '2017-05-20T16:00:00.000Z',
          'createDate': '2017-05-24T06:16:24.575Z',
          'id': 8
        },
        {
          'taskListId': 'BkWpk7jGZb',
          'desc': '什么情况啊？',
          'completed': false,
          'ownerId': '37489e0c-df34-c261-71c4-ce75357e3035',
          'participantIds': [],
          'dueDate': null,
          'priority': 3,
          'remark': '',
          'reminder': null,
          'createDate': '2017-06-15T12:03:36.290Z',
          'id': 9
        }
      ],
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          'taskListId': 'BkWpk7jGZb',
          'desc': '增加统计报表功能',
          'completed': false,
          'ownerId': '37489e0c-df34-c261-71c4-ce75357e3035',
          'participantIds': [],
          'dueDate': '2017-07-25T16:00:00.000Z',
          'priority': 1,
          'remark': '',
          'reminder': '2017-07-17T16:00:00.000Z',
          'createDate': '2017-05-24T06:11:48.513Z',
          'id': 5
        },

      ],
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  clicked() {

  }

}
