export function getView(state) {
  return state.view;
}

export function getViewId(state) {
  return getView(state).id;
}

export function getViewRoot(state) {
  return getView(state).root;
}
