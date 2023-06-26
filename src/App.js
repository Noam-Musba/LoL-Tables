// import { useState } from 'react';
import './App.css';
// import LckMainTable from './components/LckMainTable';
import MainTableWrapper from './components/MainTableWrapper';
import ShowLeagueTable from './components/ShowLeagueTable';

function App() {

  return (
    <div className="App">
      {/* <MainTableWrapper league={league}/> */}
      <ShowLeagueTable />
    </div>
  );
}

export default App;
