import React from 'react';

/**
 * PUBLIC_INTERFACE
 * MainContainer serves as the primary layout wrapper for the ItaliaGusto blog.
 * It provides the main structure and styling for the application content.
 */
const MainContainer = ({ children }) => {
  return (
    <div className="italia-gusto-container">
      {children}
    </div>
  );
};

export default MainContainer;
