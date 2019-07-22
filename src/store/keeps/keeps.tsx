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
  isOpen: boolean;
}

export interface KeepsContext {
  keeps: Keep[];
  addKeep: (newKeep: Keep) => void;
  addKeeps: (newKeeps: Keep[]) => void;
  editKeep: (id: string, value: string) => void;
  deleteKeep: (id: string) => void;
  openKeep: (id: string) => void;
  closeKeep: (id: string) => void;
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

  const editKeep = useCallback((id: string, value: string) => {
    setKeeps(keeps =>
      keeps.map(keep => {
        if (keep.id === id) {
          keep.value = value;
        }
        return keep;
      })
    );
  }, []);

  const deleteKeep = useCallback((id: string) => {
    setKeeps(keeps => keeps.filter(keep => keep.id !== id));
  }, []);

  const openKeep = useCallback((id: string) => {
    setKeeps(keeps =>
      keeps.map(keep => {
        if (keep.id === id) {
          keep.isOpen = true;
        } else {
          keep.isOpen = false;
        }
        return keep;
      })
    );
  }, []);

  const closeKeep = useCallback((id: string) => {
    setKeeps(keeps =>
      keeps.map(keep => {
        if (keep.id === id) {
          keep.isOpen = false;
        }
        return keep;
      })
    );
  }, []);

  if (!isValidElement(children)) {
    return null;
  }

  return (
    <KeepsContext.Provider
      value={{
        keeps,
        addKeep,
        addKeeps,
        editKeep,
        deleteKeep,
        openKeep,
        closeKeep
      }}
    >
      {children}
    </KeepsContext.Provider>
  );
};

export default KeepsProvider;
