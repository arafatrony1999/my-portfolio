import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function CustomMetaTags(props) {
    if(props.title){
        return (
            <>
                <Helmet>
                    <title>{props.title}</title>
                    <meta property="og:title" content={props.title} />
                    <meta property="og:description" content={props.description} />
                    <meta property="og:image" content={props.image} />
                    <meta property="og:url" content={props.link} />
                    <meta property="og:type" content="article" />

                    <meta name="twitter:card" content={props.image} />
                    <meta name="twitter:title" content={props.title} />
                    <meta name="twitter:description" content={props.description} />
                    <meta name="twitter:image" content={props.image} />
                </Helmet>
            </>
        )
    }
}
