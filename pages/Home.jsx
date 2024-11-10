import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You’ve got the adventure, we’ve got the snowmobiles.</h1>
            <p>Take your winter getaway to the next level. Rent the perfect snowmobile and hit the trails in style.</p>
            <Link to="/snowmobiles">Find your snowmobile</Link>
        </div>
    )
}