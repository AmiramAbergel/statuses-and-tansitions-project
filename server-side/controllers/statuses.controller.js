import {
  getStatusesListFromLocalStorage,
  getStatusFromLocalStorage,
  addStatusToLocalStorage,
  deleteStatusFromLocalStorage,
  updateStatusInLocalStorage,
} from '../services/localStorage.service.js';

export const getStatusesList = async (req, res) => {
  try {
    const statusesList = await getStatusesListFromLocalStorage();
    res.status(200).json(statusesList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const status = await getStatusFromLocalStorage(id);
    res.status(200).json(status);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStatus = async (req, res) => {
  const status = req.body;
  try {
    const newStatus = await addStatusToLocalStorage(status);
    res.status(201).json(newStatus);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteStatus = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteStatusFromLocalStorage(id);
    res.status(200).json({ message: 'Status deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateStatuses = async (req, res) => {
  try {
    const { id } = req.params;
    const status = req.body;
    await updateStatusInLocalStorage(id, status);
    res.status(200).json({ message: 'Status updated successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getInitialStatus = async (req, res) => {
  try {
    const statusesList = await getStatusesListFromLocalStorage();
    const initialStatus = statusesList.find((status) => status.isInitial);
    res.status(200).json(initialStatus);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
