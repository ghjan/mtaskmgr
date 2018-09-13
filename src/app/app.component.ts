import {Component} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {trigger, transition, state} from '@angular/animations';

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
  darkTheme = false;

  constructor(
    private oc: OverlayContainer) {
  }

  switchTheme(dark) {
    this.darkTheme = dark;
    if (dark) {
      this.oc.getContainerElement().classList.add('myapp-dark-theme');
    } else {
      this.oc.getContainerElement().classList.remove('myapp-dark-theme');
    }
  }
}
