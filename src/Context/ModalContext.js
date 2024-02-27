import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState({});
  const [singlePoll, setSinglePoll] = useState(null);
  
  return (
    <ModalContext.Provider value={{ setModal, modal, setSinglePoll, singlePoll }}>
      {children}
    </ModalContext.Provider>
  );
};
