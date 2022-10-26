import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - Margaux`}</title>
        </Helmet>
    )
}

export default MetaData


// Custom title sa Title Bar sa browser