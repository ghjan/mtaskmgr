import {animate, state, style, transition, trigger, group, AnimationTriggerMetadata} from '@angular/animations';

export const slideToRight = trigger('routeAnim', [
  // state('void', style({display: 'flex', overflow: 'auto'})),
  // state('*', style({display: 'flex', overflow: 'auto'})),
  state('void', style({'width': '100%', 'height': '80%', 'position': 'fixed'})),
  state('*', style({'width': '100%', 'height': '80%', 'position': 'fixed'})),
  transition(':enter', [  //   void=>*
    style({transform: 'translateX(-100%)', opacity: 0}),
    group([
      animate('.5s ease-in-out', style({transform: 'translateX(0)'})), // 位置
      animate('.3s ease-in', style({opacity: 1})), // 透明度
    ])
  ]),
  transition(':leave', [ //   *=>void
    style({transform: 'translateX(0)', opacity: 1}),
    group([
      animate('.5s ease-in-out', style({transform: 'translateX(100%)'})),
      animate('.3s ease-in', style({opacity: 0})),
    ])
  ]),
]);
//
// const slideToBottom = trigger('routeAnim', [
//   state('void', style({width: '100%', height: '80%'})),
//   state('*', style({width: '100%', height: '80%'})),
//   transition(':enter', [
//     style({transform: 'translateY(-100%)'}),
//     animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
//   ]),
//   transition(':leave', [
//     style({transform: 'translateY(0%)'}),
//     animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
//   ])
// ]);
//
// const slideToTop = trigger('routeAnim', [
//   state('void', style({position: 'fixed', width: '100%', height: '100%'})),
//   state('*', style({position: 'fixed', width: '100%', height: '100%'})),
//   transition(':enter', [
//     style({transform: 'translateY(100%)'}),
//     animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
//   ]),
//   transition(':leave', [
//     style({transform: 'translateY(0%)'}),
//     animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
//   ])
// ]);

export const defaultRouteAnim: AnimationTriggerMetadata = slideToRight;
