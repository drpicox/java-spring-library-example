import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { SET_VIEW } from '../actions';

export function historyPushStateEpic(action$, store) {
  return action$
    .ofType(SET_VIEW)
    .filter(action => !action.popped)
    .do(action =>
      window.history.pushState(action, `${action.root}[${action.id}]`),
    )
    .filter(x => false);
}

export function watchPopState(action$, store) {
  return new Observable(observer => {
    const handler = event => {
      if (event.state.type === SET_VIEW) {
        observer.next({
          popped: true,
          ...event.state,
        });
      }
    };

    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  });
}

export default combineEpics(historyPushStateEpic, watchPopState);
