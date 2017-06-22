import { trigger, state, style, animate, transition } from '@angular/animations';


export function fadeInOut() {
  return trigger(
    'fadeInOut',
    [
      state('void', style({opacity: 0}) ),
      state('*', style({opacity: 1}) ),
      state('fadeOut', style({opacity: 0}) ),
      state('fadeIn', style({opacity: 1}) ),
      transition(":enter", [
        style({ opacity: 0}),
        animate('2000ms ease-out', style({opacity: 1}))
      ]),
      transition(":leave", [
        style({ opacity: 1}),
        animate('2000ms ease-out', style({opacity: 0}))
      ]),
      transition("fadeOut => fadeIn", [
        style({ opacity: 0}),
        animate('300ms ease-out', style({opacity: 1}))
      ]),
      transition("fadeIn => fadeOut", [
        style({ opacity: 1}),
        animate('300ms ease-out', style({opacity: 0}))
      ])
    ])
}
