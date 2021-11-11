import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import './collections-overview.styles.scss'
import {selectCollections} from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({collections}) =>(
    <section className='collections-overview'>
        {
            collections.map(({id, ...otherProps}) => (
                <CollectionPreview key={id} {...otherProps}/>
            ))
        }
    </section>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);