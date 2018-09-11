import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    mat-sidenav-container.myapp-dark-theme {
      background: black;
    }

    mat-sidenav {
      width: 300px;
    }
  `]
})
export class AppComponent {
  title = 'mtaskmgr';
}
