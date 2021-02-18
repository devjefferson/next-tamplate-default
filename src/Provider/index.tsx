import React, { useContext, createContext } from 'react';

// import Data from '../Data/data.json'
interface ProviderContextData{

  dataObjectJson(
    params: string
  ): object | any | void
}

export const AppContext = createContext<ProviderContextData>({} as ProviderContextData);

export const AppContextProvider: React.FC = ({children})=>{

  function dataObjectJson(params: string){
    return //Data[params]
  }

  return <AppContext.Provider value={{ dataObjectJson }} >{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext);

  if(!context){
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAppContext;
