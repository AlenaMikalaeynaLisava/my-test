import React from 'react';
import './App.css';
//import axios from "axios";
//import ApiRequestComponent from './ApiRequest/ApiRequestComponent';
import SearchArea from './Components/SearchArea/SearchArea';
import MainPage from './Components/MainArea/MainPage';

//import Request from "./components/Request";


class App extends React.Component {

  render() {
  // const {requestApiResult} = this.state;
  // console.log(requestApiResult);
  return (
    <div className="App">
      {/* <h1><ApiRequestComponent /></h1>
      <ul> 
          {requestApiResult.length > 0
            ? requestApiResult.map((requestApiResult) => (
                <ApiRequestComponent key={requestApiResult.id} categories={requestApiResult.categories} query={requestApiResult.query} />
              ))
            : "no request found"}
       </ul>  */}
      <SearchArea />
      <MainPage />
    </div>

  );
}
}
export default App;
