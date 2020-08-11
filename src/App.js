import React from 'react';
import './App.css';

import SearchArea from './Components/SearchArea/SearchArea';
import MainPage from './Components/MainArea/MainPage';

class App extends React.Component {

  render() {
  return (
    <div className="App">
      <SearchArea />
      <MainPage />
    </div>

  );
}
}
export default App;
