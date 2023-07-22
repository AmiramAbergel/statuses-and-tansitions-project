import {
  getTransitionsListFromLocalStorage,
  getTransitionFromLocalStorage,
  addTransitionToLocalStorage,
  deleteTransitionFromLocalStorage,
  updateTransitionInLocalStorage,
} from '../services/localStorage.service.js';

export const getTransitionsList = async (req, res) => {
  try {
    const transitionsList = await getTransitionsListFromLocalStorage();
    res.status(200).json(transitionsList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTransition = async (req, res) => {
  const { id } = req.params;
  try {
    const transition = await getTransitionFromLocalStorage(id);
    res.status(200).json(transition);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTransition = async (req, res) => {
  const transition = req.body;
  try {
    const newTransition = await addTransitionToLocalStorage(transition);
    res.status(201).json(newTransition);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTransition = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteTransitionFromLocalStorage(id);
    res.status(200).json({ message: 'Transition deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateTransitions = async (req, res) => {
  try {
    const { id } = req.params;
    const transition = req.body;
    await updateTransitionInLocalStorage(id, transition);
    res.status(200).json({ message: 'Transition updated successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
