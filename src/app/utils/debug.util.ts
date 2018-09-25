import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

// ts相关的
declare module 'rxjs' {
  interface Observable<T> {
    debug: (...any) => Observable<T>;
  }
}

Observable.type.prototype.debug = function (message: string) {
  return this.do(
    (next) => {
      if (!environment.production) {
        console.log(message, next);
      }
    },
    (err) => {
      if (!environment.production) {
        console.error('ERROR>>>', message, err);
      }
    },
    () => {
      if (!environment.production) {
        console.log('Completed - ');
      }
    }
  );
};
