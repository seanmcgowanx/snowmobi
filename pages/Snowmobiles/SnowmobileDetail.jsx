import React from 'react'
import { useParams } from 'react-router-dom'
import { getSnowmobile } from '../../api'

export default function SnowmobileDetail() {

    const params = useParams()
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

    return (
        <div className="snowmobile-detail-container">
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