/*
* It's important to also use a action reducer
* which keeps track of the latest action for
* this to work.
*/

import { useRef, useEffect } from "react";
import { useStore } from "react-redux";
import _castArray from "lodash.castarray";

/**
 * Subscribes to redux store events
 *
 * @param effect
 * @param type
 * @param deps
 */
export function useReduxAction(effect, type, deps = []) {
  const currentValue = useRef(null);
  const store = useStore();

  const handleChange = () => {
    const state = store.getState();
    const action = state.action;
    let previousValue = currentValue.current;
    currentValue.current = action.type;

    if (
      previousValue !== action.type &&
      _castArray(type).includes(action.type)
    ) {
      effect(action);
    }
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(handleChange);
    return () => unsubscribe();
  }, deps);
}
