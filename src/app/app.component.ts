import {Component, HostBinding} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {trigger, transition, state, style, animate} from '@angular/animations';

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
  `],
  animations: [
    trigger('square', [
      state('green', style({'background-color': 'green', 'height': '100px', 'transform': 'translateX(0)'})),
      state('red', style({'background-color': 'red', 'height': '50px', 'transform': 'translateX(100%)'})),
      // state('blue', style({'background-color': 'blue', 'height': '160px', 'transform': 'translateY(0)'})),
      // state('yellow', style({'background-color': 'yellow', 'height': '80px', 'transform': 'translateY(100%)'})),
      transition('green => red', animate('.2s 1s')),
      transition('red => green', animate('.2s 1s')),
      // transition('green => blue', animate('.2s 1s')),
      // transition('blue => green', animate('.2s 1s')),
      // transition('green => yellow', animate('.2s 1s')),
      // transition('yellow => green', animate('.2s 1s')),
      // transition('red => blue', animate('.2s 1s')),
      // transition('blue => red', animate(1000)),
      // transition('red => yellow', animate(1000)),
      // transition('yellow => red', animate(1000)),
      // transition('blue => yellow', animate(1000)),
      // transition('yellow => blue', animate(1000)),
    ]),
  ],
})
export class AppComponent {
  squareState = '';
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


  getSquareState(oldColor): string {
    const color = {
      name: ['green', 'red'
        // , 'blue', 'yellow'
      ],
      getName: function () {
        // const i = Math.floor(Math.random() * 2) % 2;
        let oldColorIndex = 0;
        if (oldColor && oldColor !== '') {
          for (let i = 0; i < color.name.length; i++) {
            if (color.name[i] === oldColor) {
              oldColorIndex = i;
              break;
            }
          }
        }
        return color.name[(oldColorIndex + 1) % 2];
      },

    };
    return color.getName();
  }

  squareClicked() {

    this.squareState = this.getSquareState(this.squareState);
  }
}
