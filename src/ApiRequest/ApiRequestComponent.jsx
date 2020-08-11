import React from "react";



// function ApiRequestComponent(props) {
//   const { categories, query } = props;
//   return (
//     <li>
//       <span>Category: {categories} Query: {query}</span>
//     </li>
//   );
// }

class ApiRequestComponent extends React.Component{
    render(){
        //const { categories, query } = this.props;
        const { categories, query } = this.props;
        return(
            <li>
            <span>Category: {categories} Query: {query}</span> 
            {/* <span>UI</span>  */}
            </li>
        )
    }
}

export default ApiRequestComponent;
