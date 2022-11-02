import React, { useContext, useMemo, useState } from 'react'

import { Character } from '@/apptypes'

interface AppContextInterface {
  setCharacters?: React.Dispatch<React.SetStateAction<Character[]>>;
  characters?: Character[];
}

interface AppProviderProps {
  children: React.ReactNode;
  value?: AppContextInterface;
}

const AppContext = React.createContext<AppContextInterface>({})

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([])

  const value = useMemo(() => {
    return {
      characters,
      setCharacters,
    }
  }, [characters])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useApp = (): AppContextInterface => useContext(AppContext)!

export {
  AppContext,
  AppProvider,
  useApp,
}
