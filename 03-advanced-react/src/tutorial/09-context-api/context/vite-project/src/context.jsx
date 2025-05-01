import { useContext } from 'react';
import { createContext } from 'react';

const myContext = createContext();
export const useAppContext = () => useContext(myContext);

const Context = ({ children }) => {
  return (
    <myContext.Provider value={{ name: 'marwa' }}>
      {children}
    </myContext.Provider>
  );
};
export default Context;
