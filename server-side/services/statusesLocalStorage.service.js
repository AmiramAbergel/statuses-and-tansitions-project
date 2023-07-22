import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorageHandler.js';

export const getStatusesListFromLocalStorage = () => {
  const statuses = loadFromLocalStorage('statuses');
  if (statuses === undefined) {
    return [];
  }
  return statuses;
};

export const getStatusFromLocalStorage = (id) => {
  const statuses = loadFromLocalStorage('statuses');
  if (statuses === undefined) {
    return [];
  }
  return statuses.find((status) => status.id === id);
};

export const addStatusToLocalStorage = (status) => {
  const statuses = loadFromLocalStorage('statuses');
  if (statuses === undefined) {
    return [];
  }
  statuses.push(status);
  saveToLocalStorage('statuses', statuses);
};

export const deleteStatusFromLocalStorage = (id) => {
  const statuses = loadFromLocalStorage('statuses');
  if (statuses === undefined) {
    return [];
  }
  const newStatuses = statuses.filter((status) => status.id !== id);
  saveToLocalStorage('statuses', newStatuses);
};

export const updateStatusInLocalStorage = (id, status) => {
  const statuses = loadFromLocalStorage('statuses');
  if (statuses === undefined) {
    return [];
  }
  const newStatuses = statuses.map((item) => {
    if (item.id === id) {
      return status;
    }
    return item;
  });
  saveToLocalStorage('statuses', newStatuses);
};
