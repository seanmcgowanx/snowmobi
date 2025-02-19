import React from 'react'
import { getSnowmobile } from '../../api'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'

export default function HostSnowmobileDetail() {

    const { id } = useParams()
    const [snowmobile, setSnowmobile] = React.useState(null)

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }


    React.useEffect(() => {
        async function loadHostSnowmobile() {
            try {
                const data = await getSnowmobile(id)
                setSnowmobile(data)
            } catch (error) {
                console.error('Error loading host snowmobile', error)
            }
        }

        loadHostSnowmobile()
    }, [id])

    if (!snowmobile) {
        return (
            <p>...Loading</p>
        )
    }

    return (
        <section>
            <Link
                to="../snowmobiles"
                className="back-button"
            >&larr; <span>Back to all snowmobiles</span></Link>

            <div className="host-snowmobile-detail-layout-container">
                <div className="host-snowmobile-detail">
                    <img src={snowmobile.imageUrl} />
                    <div className="host-snowmobile-detail-info-text">
                        <i className={`snowmobile-type ${snowmobile.type} selected`}>{snowmobile.type}</i>
                        <h3>{snowmobile.name}</h3>
                        <h4>${snowmobile.price}/day</h4>
                    </div>
                </div>
            

            <nav className="host-snowmobile-detail-nav">
                <NavLink 
                    to='.'
                    end
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Details
                </NavLink>
                <NavLink 
                    to='pricing'
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Pricing
                </NavLink>
                <NavLink 
                    to='photos'
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Photos
                </NavLink>
            </nav>

            <Outlet context={{ snowmobile }}/>

            </div>

        </section>
    )
}