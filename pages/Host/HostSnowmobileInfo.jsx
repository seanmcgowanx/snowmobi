import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostSnowmobileInfo() { 

    const { snowmobile } = useOutletContext()

    return (
        <section className="host-snowmobile-detail-info">
            <h4>Name: <span>{snowmobile.name}</span></h4>
            <h4>Category: <span>{snowmobile.type}</span></h4>
            <h4>Description: <span>{snowmobile.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}