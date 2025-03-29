import React from 'react';
import DataAnalysis from './components/DataAnalysis';
import UserEngagement from './components/UserEngagement';
import Automation from './components/Automation';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Machine Learning Based Web Application</h1>
      </header>
      <main className="app-main">
        <DataAnalysis />
        <UserEngagement />
        <Automation />
      </main>
    </div>
  );
};

export default App;
