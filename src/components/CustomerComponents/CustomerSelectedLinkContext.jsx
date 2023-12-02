import React, { createContext, useState, useContext } from 'react';

const CustomerSelectedLinkContext = createContext();

export function useSelectedLink() {
  return useContext(CustomerSelectedLinkContext);
}

export function SelectedLinkProvider({ children }) {
  const [selectedLink, setSelectedLink] = useState('');

  const updateSelectedLink = (linkName) => {
    setSelectedLink(linkName);
  };

  return (
    <CustomerSelectedLinkContext.Provider value={{ selectedLink, updateSelectedLink }}>
      {children}
    </CustomerSelectedLinkContext.Provider>
  );
}