import React from 'react'
import { getSnowmobiles } from '../../api'
import { Link, useSearchParams } from 'react-router-dom'

export default function Snowmobiles() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [snowmobiles, setSnowmobiles] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        async function loadSnowmobiles() {
            setLoading(true)
            try {
                const data = await getSnowmobiles()
                setSnowmobiles(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        loadSnowmobiles();

    }, []);

    const displayedSnowmobiles = typeFilter
        ? snowmobiles.filter(snowmobile => snowmobile.type === typeFilter)
        : snowmobiles


    const snowmobileElements =displayedSnowmobiles.map(snowmobile => (
        <div key={snowmobile.id} className="snowmobile-tile">
            <Link 
                to = {snowmobile.id}
                aria-label = {`View details for ${snowmobile.name}, priced at $${snowmobile.price} per day`} 
                state={ { 
                            search: searchParams.toString(),
                            type: typeFilter
                        }
                    }

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

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if (loading) {
        return <h1 aria-live="polite">Loading...</h1>
    }

    if (error) {
        return (
            <h1 aria-live="assertive">There was an error: {error.message}</h1>
        )
    }

    return(
        <div className="snowmobile-list-container">
            <h1>Explore our snowmobile options</h1>
            <div className='snowmobile-list-filter-buttons'>
                <button 
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`snowmobile-type simple ${typeFilter==='simple' && 'selected'}`}
                >
                    Simple
                </button>
                <button 
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`snowmobile-type luxury ${typeFilter==='luxury' && 'selected'}`}
                >
                    Luxury
                </button>
                <button 
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`snowmobile-type rugged ${typeFilter==='rugged' && 'selected'}`}
                >
                    Rugged
                </button>
                {typeFilter && 
                <button 
                    onClick={() => setSearchParams({type: ''})} 
                    className='snowmobile-type clear-filters'
                >
                    Clear filter
                </button>}
            </div>
            <div className="snowmobile-list">
                {snowmobileElements}
            </div>
        </div>
    )
}