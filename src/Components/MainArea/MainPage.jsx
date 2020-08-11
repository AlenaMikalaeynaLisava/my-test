import React, {Component} from 'react'
import HttpComponents from "./Components/HttpComponents"
//import HttpsComponents from "./Components/HttpsComponents"
import {ApiData} from '../../ApiRequest/CategoriesPlus'

export default  class MainPage extends React.Component {
    state ={
        dataWeNeed : [],
    }
    async componentDidMount() {
        const dataWeNeed = await ApiData();
        this.setState ({dataWeNeed});
    }

    render() {
        //console.log(dataWeNeed)
        return (
          <div className="App">  
             <ul>
                 <li>{this.state.dataWeNeed.length>0?this.state.dataWeNeed.map((apidata =>{
                     if(apidata.categories=="http"){
                 return <HttpComponents key={apidata.id} categories={apidata.categories} description={apidata.description} 
                 query={apidata.query}  link={apidata.link}/>}})): "loading"}
                 </li>
                 <li>{this.state.dataWeNeed.length>0?this.state.dataWeNeed.map((apidata =>{
                     if(apidata.categories=="https"){
                 return <HttpComponents key={apidata.id} categories={apidata.categories} description={apidata.description} 
                 query={apidata.query}  link={apidata.link}/>}})): "loading"}
                 </li>
            </ul>
          </div>
      
        );
      }
      }
     