import React from 'react'
import { Link } from 'react-router-dom'
import { getHostSnowmobiles } from '../../api'

export default function HostSnowmobiles() {

    const [hostSnowmobiles, setHostSnowmobiles] = React.useState([])

    React.useEffect(() => {
        async function loadHostSnowmobiles() {
            try {
                const data = await getHostSnowmobiles()
                setHostSnowmobiles(data)
            } catch (error) {
                console.error("Error loading host snowmobiles", error)
            }
        }

        loadHostSnowmobiles()
    }, [])

    const hostSnowmobilesEls = hostSnowmobiles.map(hostSnowmobile => (
        <Link
            to={`/host/snowmobiles/${hostSnowmobile.id}`}
            key={hostSnowmobile.id}
            className="host-snowmobile-link-wrapper"
        >
            <div className="host-snowmobile-single" key={hostSnowmobile.id}>
                <img src={hostSnowmobile.imageUrl} alt={`Photo of ${hostSnowmobile.name}`} />
                <div className="host-snowmobile-info">
                    <h3>{hostSnowmobile.name}</h3>
                    <p>${hostSnowmobile.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-snowmobiles-title">Your listed snowmobiles</h1>
            <div className="host-snowmobiles-list">
                {
                    hostSnowmobiles.length > 0 ? (
                        <section>
                            {hostSnowmobilesEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}