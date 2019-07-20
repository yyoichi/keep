import React, {
  createContext,
  ReactNode,
  isValidElement,
  useState,
  useCallback
} from 'react';

export interface Keep {
  id: string;
  value: string;
}

export interface KeepsContext {
  keeps: Keep[];
  addKeep: (newKeep: Keep) => void;
  addKeeps: (newKeeps: Keep[]) => void;
  deleteKeep: (id: string) => void;
}

const KeepsContext = createContext<KeepsContext>(null);

export const KeepsConsumer = KeepsContext.Consumer;

const KeepsProvider = ({ children }: { children: ReactNode }) => {
  const [keeps, setKeeps] = useState<Keep[]>([]);

  const addKeep = useCallback((newKeep: Keep) => {
    setKeeps(keeps => [...keeps, newKeep]);
  }, []);

  const addKeeps = useCallback((newKeeps: Keep[]) => {
    setKeeps(keeps => [...keeps, ...newKeeps]);
  }, []);

  const deleteKeep = useCallback((id: string) => {
    setKeeps(keeps => keeps.filter(keep => keep.id !== id));
  }, []);

  if (!isValidElement(children)) {
    return null;
  }

  return (
    <KeepsContext.Provider value={{ keeps, addKeep, addKeeps, deleteKeep }}>
      {children}
    </KeepsContext.Provider>
  );
};

export default KeepsProvider;
