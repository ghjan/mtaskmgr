import {NgModule} from '@angular/core';
import {TaskHomeComponent} from './task-home/task-home.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {TaskHeaderComponent} from './task-header/task-header.component';
import {SharedModule} from '../shared/shared.module';
import {TaskRoutingModule} from './task-routing.module';
import {NewTaskComponent} from './new-task/new-task.component';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule,
  ],
  entryComponents: [
    NewTaskComponent,
  ],
  declarations: [TaskHomeComponent, TaskHeaderComponent, TaskListComponent, TaskItemComponent, NewTaskComponent],
})
export class TaskModule {
}
