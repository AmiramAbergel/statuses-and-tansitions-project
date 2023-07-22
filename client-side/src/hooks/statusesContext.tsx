// export const StatusesContext = React.createContext<StatusesContextInterface>({
//   statuses: [],
//   addStatus: (status: StatusInterface) => {},
//   removeStatus: (id: string) => {},
// });

// const StatusesContextProvider: React.FC = (props) => {
//   const [statuses, setStatuses] = useState<StatusInterface[]>([]);

//   const addStatusHandler = (status: StatusInterface) => {
//     const newStatus = new Status(status);
//     setStatuses((prevStatuses) => {
//       return prevStatuses.concat(status);
//     });
//   };

//   const removeStatusHandler = (id: string) => {
//     setStatuses((prevStatuses) => {
//       return prevStatuses.filter((status) => status.id !== id);
//     });
//   };

//   const contextValue: StatusesContextInterface = {
//     statuses: statuses,
//     addStatus: addStatusHandler,
//     removeStatus: removeStatusHandler,
//   };

//   return (
//     <StatusesContext.Provider value={contextValue}>
//       {props.children}
//     </StatusesContext.Provider>
//   );
// } 
