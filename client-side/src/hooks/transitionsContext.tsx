import { createContext, useState, useEffect } from 'react';
import { clientAPI } from '../api/api';

export const TransitionsContext = createContext({});

export const TransitionsContextProvider = (props) => {
  const [transitions, setTransitions] = useState<Transition[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTransitions = async () => {
      try {
        setIsLoading(true);
        const args = { method: 'GET', endPoint: '/transitions' };
        const response = await clientAPI(args);
        setTransitions(response.data);
        setIsLoading(false);
      } catch (error) {
        throw error;
      }
    };
    fetchTransitions();
  }, []);

  const addTransition = async (transition: Transition) => {
    try {
      const args = { method: 'POST', endPoint: '/transitions', data: transition };
      const response = await clientAPI(args);
      setTransitions([...transitions, response.data]);
    } catch (error) {
      throw error;
    }
  };

  const deleteTransition = async (transitionID: string) => {
    try {
      const args = { method: 'DELETE', endPoint: `/transitions/${transitionID}` };
      const response = await clientAPI(args);
      setTransitions(transitions.filter((transition) => transition.id !== transitionID));
    } catch (error) {
      throw error;
    }
  };

  const values = {
    transitions,
    addTransition,
    deleteTransition,
    isLoading,
  };

  return <TransitionsContext.Provider value={values}>{props.children}</TransitionsContext.Provider>;
};
