import React from "react";
import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";
import { Link } from "react-router-dom";


class HomePage extends React.Component{

    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return (
            <div className = 'homepage'>
                <Link to='/topics'>Topics</Link>
                <Directory/>
            </div>
        )
    }
    componentWillUnmount(){
    }
}
export default HomePage;