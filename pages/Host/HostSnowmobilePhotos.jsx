import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostSnowmobilePhotos() {

    const { snowmobile } = useOutletContext()

    return (
        <img src={snowmobile.imageUrl} className="host-snowmobile-detail-image" />
    )
}