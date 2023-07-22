import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorageHandler.js';

export const getTransitionsListFromLocalStorage = () => {
  const transitions = loadFromLocalStorage('transitions');
  if (transitions === undefined) {
    return [];
  }
  return transitions;
};

export const getTransitionFromLocalStorage = (id) => {
  const transitions = loadFromLocalStorage('transitions');
  if (transitions === undefined) {
    return [];
  }
  return transitions.find((transition) => transition.id === id);
};

export const addTransitionToLocalStorage = (transition) => {
  const transitions = loadFromLocalStorage('transitions');
  if (transitions === undefined) {
    return [];
  }
  transitions.push(transition);
  saveToLocalStorage('transitions', transitions);
};

export const deleteTransitionFromLocalStorage = (id) => {
  const transitions = loadFromLocalStorage('transitions');
  if (transitions === undefined) {
    return [];
  }
  const newTransitions = transitions.filter((transition) => transition.id !== id);
  saveToLocalStorage('transitions', newTransitions);
};

export const updateTransitionInLocalStorage = (id, transition) => {
  const transitions = loadFromLocalStorage('transitions');
  if (transitions === undefined) {
    return [];
  }
  const newTransitions = transitions.map((item) => {
    if (item.id === id) {
      return transition;
    }
    return item;
  });
  saveToLocalStorage('transitions', newTransitions);
};
