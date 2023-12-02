import React, { createContext, useState, useContext } from 'react';

const SellerSelectedLinkContext = createContext();

export function useSelectedLink() {
  return useContext(SellerSelectedLinkContext);
}

export function SelectedLinkProvider({ children }) {
  const [selectedLink, setSelectedLink] = useState('');

  const updateSelectedLink = (linkName) => {
    setSelectedLink(linkName);
  };

  return (
    <SellerSelectedLinkContext.Provider value={{ selectedLink, updateSelectedLink }}>
      {children}
    </SellerSelectedLinkContext.Provider>
  );
}