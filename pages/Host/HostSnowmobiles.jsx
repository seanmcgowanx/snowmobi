import React from 'react'
import { Link } from 'react-router-dom'
import { getHostSnowmobiles } from '../../api'

export default function HostSnowmobiles() {

    const [hostSnowmobiles, setHostSnowmobiles] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadHostSnowmobiles() {
            setLoading(true)
            try {
                const data = await getHostSnowmobiles()
                setHostSnowmobiles(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        loadHostSnowmobiles()
    }, [])

    const hostSnowmobilesEls = hostSnowmobiles.map(hostSnowmobile => (
        <Link
            to={hostSnowmobile.id}
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

    if (loading) {
        return <h1 aria-live="polite">Loading...</h1>
    }

    if (error) {
        return (
            <h1 aria-live="assertive">There was an error: {error.message}</h1>
        )
    }

    return (
        <section>
            <h1 className="host-snowmobiles-title">Your listed snowmobiles</h1>
            <div className="host-snowmobiles-list">
                <section>
                    {hostSnowmobilesEls}
                </section>
            </div>
        </section>
    )
}