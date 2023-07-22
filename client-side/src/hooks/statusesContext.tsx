import { createContext, useState, useEffect } from 'react';
import { clientAPI } from '../api/api';

export interface StatusContextInterface {
  statuses: Status[];
  addStatus: (status: Status) => void;
  deleteStatus: (statusID: string) => void;
  isLoading: boolean;
}

export const StatusesContext = createContext<StatusContextInterface>({
  statuses: [],
  addStatus: (status: Status) => {},
  deleteStatus: (statusID: string) => {},
  isLoading: false,
});

export const StatusesContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        setIsLoading(true);
        const args = { method: 'GET', endPoint: '/statuses' };
        const response = await clientAPI(args);
        setStatuses(response.data);
        setIsLoading(false);
      } catch (error) {
        throw error;
      }
    };
    fetchStatuses();
  }, []);

  const addStatus = async (status: Status) => {
    try {
      const args = { method: 'POST', endPoint: '/statuses', data: status };
      const response = await clientAPI(args);
      setStatuses([...statuses, response.data]);
    } catch (error) {
      throw error;
    }
  };

  const deleteStatus = async (statusID: string) => {
    try {
      const args = { method: 'DELETE', endPoint: `/statuses/${statusID}` };
      const response = await clientAPI(args);
      setStatuses(statuses.filter((status) => status.id !== statusID));
    } catch (error) {
      throw error;
    }
  };

  const contextValue: StatusContextInterface = {
    statuses,
    addStatus,
    deleteStatus,
    isLoading,
  };

  return <StatusesContext.Provider value={contextValue}>{props.children}</StatusesContext.Provider>;
};
