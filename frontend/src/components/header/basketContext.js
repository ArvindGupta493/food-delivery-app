import React, { createContext, useState } from "react";

// Create a Context
export const BasketContext = createContext();

// Provider Component
export const BasketProvider = ({ children }) => {
  const [showSummary, setShowSummary] = useState(false);

  const toggleBasket = () => {
    setShowSummary((prev) => !prev);
  };

  return (
    <BasketContext.Provider value={{ showSummary, toggleBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
