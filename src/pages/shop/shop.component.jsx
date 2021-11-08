import React from "react";
import "./shop.styles.scss"
import SHOPDATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
class ShopPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            collections: SHOPDATA
        }
    }

    render(){
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherProps}) => (
                        <CollectionPreview key={id} {...otherProps}/>
                    ))
                }
            </div>
        );
    }

}

export default ShopPage;