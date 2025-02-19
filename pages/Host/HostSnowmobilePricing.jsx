import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostSnowmobilePricing() {

    const { snowmobile } = useOutletContext()

    return (
        <h3 className="host-snowmobile-price">${snowmobile.price}<span>/day</span></h3>
    )
}