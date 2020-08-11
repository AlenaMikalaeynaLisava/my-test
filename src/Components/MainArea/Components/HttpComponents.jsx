import React, {Component} from 'react'
//import PropTypes from 'prop-types'



export default class HttpComponent extends Component{
    // static PropTypes ={
    //     categories: PropTypes.string.isRequired,
    //     description: PropTypes.string.isRequired,
    //     query: PropTypes.string.isRequired,
    //     link: PropTypes.string.isRequired,
    // };
    render(){
      
        return(
            <div>
                <h1>Categories:{this.props.categories}</h1>
                <ul>
                    <li>Description:{this.props.description}</li>
                    <li>Query:{this.props.query}</li>
                    <li>Link:{this.props.link}</li>
                </ul>
            

            </div>
        
        )
    }
} 

 