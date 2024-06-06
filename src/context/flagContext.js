import React, { createContext , useState} from 'react';

const FlagContext = createContext();

const FlagProvider = ({ children }) => {

    const [isLogedIn , setIsLogedIn] = useState();

  return (
    <FlagContext.Provider value={{isLogedIn , setIsLogedIn}}>
      {children}
    </FlagContext.Provider>
  );
};

export { FlagContext, FlagProvider };