import React from 'react';
import { Registration } from './components/Registration';

// Hlavní komponenta aplikace
export const App = () => {
  return (
    <div className="container">
      <h1>Registrace</h1>
      <Registration />
    </div>
  );
};
export default App;
