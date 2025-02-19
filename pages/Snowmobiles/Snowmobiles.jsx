import React from 'react'
import { getSnowmobiles } from '../../api'
import { Link } from 'react-router-dom'

export default function Snowmobiles() {

    const [snowmobiles, setSnowmobiles] = React.useState([])

    React.useEffect(() => {
        async function loadSnowmobiles() {
            try {
                const data = await getSnowmobiles()
                setSnowmobiles(data)
            } catch (error) {
                console.error("Error fetching snowmobiles:", error)
            }
        }

        loadSnowmobiles();

    }, []);

    if(snowmobiles.length === 0) {
        return (
            <h3>...Loading</h3>
        )
    }

    const snowmobileElements = snowmobiles.map(snowmobile => (
        <div key={snowmobile.id} className="snowmobile-tile">
            <Link 
                to = {`/snowmobiles/${snowmobile.id}`}
                aria-label = {`View details for ${snowmobile.name}, priced at $${snowmobile.price} per day`} 
            >
            <img src={snowmobile.imageUrl} alt={`Image of ${snowmobile.name}`}/>
            <div className="snowmobile-info">
                <h3 style={{ fontSize: "24px" }}>{snowmobile.name}</h3>
                <p>
                    <b style={{ fontSize: "24px" }}>${snowmobile.price}</b>
                    <span style={{ alignSelf: 'flex-end' }}>/day</span>
                </p>
            </div>
            <i className={`snowmobile-type ${snowmobile.type} selected`}>{snowmobile.type}</i>
            </Link>
        </div>
    ))


    return(
        <div className="snowmobile-list-container">
            <h1>Explore our snowmobile options</h1>
            <div className="snowmobile-list">
                {snowmobileElements}
            </div>
        </div>
    )
}