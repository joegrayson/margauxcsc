import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - Margaux Cacti & Succulents Corner`}</title>
        </Helmet>
    )
}

export default MetaData


// Custom title sa Title Bar sa browser