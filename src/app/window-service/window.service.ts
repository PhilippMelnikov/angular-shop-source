import { Injectable } from '@angular/core';

function _window() : any {
   // return the global native browser window object
   return window;
}
@Injectable()
export class WindowService {

  constructor() { }
  nativeWindow() : any {
     return _window();
  }
  isLargeScreen() {
  const width = this.nativeWindow().innerWidth;
  if (width > 768) {
        return true;
    } else {
        return false;
    }
  };
}
