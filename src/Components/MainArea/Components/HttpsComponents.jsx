import React, {Component} from 'react'

export default class HttpsComponent extends Component{
    render(){
        return(
            <div>
                <h1>Categories:{this.props.categories}</h1>
                <ul>
                    <li>Description:{this.props.description}</li>
                    <li>Query:{this.props.query}</li>
                    <li>Link:{this.props.link}</li>
                </ul>
                {/* <ul> 
                    {requestApiResult.length > 0
                        ? requestApiResult.map((requestApiResult) => (
                            <ApiRequestComponent key={requestApiResult.id} categories={requestApiResult.categories} query={requestApiResult.query} />
                        ))
                        : "no request found"}
                </ul>  */}
            </div>
        )
    }
} 