import { Injectable } from '@angular/core';


@Injectable()
export class WindowService {

  constructor() { }
  nativeWindow() {
     return window;
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
