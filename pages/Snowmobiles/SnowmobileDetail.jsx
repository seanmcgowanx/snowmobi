import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { getSnowmobile } from '../../api'

export default function SnowmobileDetail() {

    const params = useParams()
    const location = useLocation()
    const [snowmobile, setSnowmobile] = React.useState(null)
    

   React.useEffect(() => {
        async function loadSnowmobileDetail() {
            try {
                const data = await getSnowmobile(params.id)
                setSnowmobile(data)
            } catch (error) {
                console.error("Error fetching snowmobile detail:", error)
            }
        }

        loadSnowmobileDetail()

    }, [params.id])

    const search = ("?" + location.state?.search) || ""
    const type = location.state?.type

    return (
        <div className="snowmobile-detail-container">
            <Link
                to={`../${search}`}
                relative='path'
                className="back-button"
            >&larr; <span>Back to all {type} snowmobiles</span></Link>
            {snowmobile ? (
                <div className="snowmobile-detail">
                    <img src={snowmobile.imageUrl} />
                    <i className={`snowmobile-type ${snowmobile.type} selected`}>{snowmobile.type}</i>
                    <h2>{snowmobile.name}</h2>
                    <p className="snowmobile-price"><span>${snowmobile.price}</span>/day</p>
                    <p>{snowmobile.description}</p>
                    <button className="link-button">Rent this snowmobile</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}