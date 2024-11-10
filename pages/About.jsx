import React from "react"
import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Don’t settle for ordinary when you can ride a snowmobile.</h1>
                <p>Our goal is to enhance your winter experience with top-quality snowmobile rentals. Each snowmobile is fully inspected to ensure your ride is safe and reliable.</p>
                <p>Our team consists of snowmobile enthusiasts who understand the best way to explore the winter landscape.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your adventure is waiting.<br />Your snowmobile is ready.</h2>
                <Link className="link-button" to="/snowmobiles">Explore our snowmobiles</Link>
            </div>
        </div>
    )
}