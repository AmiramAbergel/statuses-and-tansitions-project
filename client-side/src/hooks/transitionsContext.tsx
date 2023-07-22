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

  const values = {
    transitions,
    isLoading,
  };

  return <TransitionsContext.Provider value={values}>{props.children}</TransitionsContext.Provider>;
};
