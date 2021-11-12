import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import './collections-overview.styles.scss'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({collections}) =>{
    console.log(collections.key)
    return (
    <section className='collections-overview'>
        {
            collections.map(({id, ...otherProps}) => (
                <CollectionPreview key={id} {...otherProps}/>
            ))
        }
    </section>
    )
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);