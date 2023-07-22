export const loadFromLocalStorage = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const saveToLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
  } catch (error) {
    console.log(error);
  }
};

export const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
