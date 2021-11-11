import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'
import { connect } from "react-redux";
import { selectDirectorySecions } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

class Directory extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
      const {sections} = this.props;
        return(
            <div className = 'directory-menu'>
                {sections.map(({id,...others})=>(
                    <MenuItem key={id} {...others}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySecions
});

export default connect(mapStateToProps)(Directory);