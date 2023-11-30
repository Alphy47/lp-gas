import React, { createContext, useState, useContext } from 'react';

const SelectedLinkContext = createContext();

export function useSelectedLink() {
  return useContext(SelectedLinkContext);
}

export function SelectedLinkProvider({ children }) {
  const [selectedLink, setSelectedLink] = useState('');

  const updateSelectedLink = (linkName) => {
    setSelectedLink(linkName);
  };

  return (
    <SelectedLinkContext.Provider value={{ selectedLink, updateSelectedLink }}>
      {children}
    </SelectedLinkContext.Provider>
  );
}
