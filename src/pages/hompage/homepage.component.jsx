import React from "react";
import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";

class HomePage extends React.Component{

    // constructor(){
    //     super();
    // }
    componentDidMount(){}
    render(){
        return (
            <div className = 'homepage'>
                <Directory/>
            </div>
        )
    }
    componentDidUpdate(){}
    componentWillUnmount(){}
}
export default HomePage;