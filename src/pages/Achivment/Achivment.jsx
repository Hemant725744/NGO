import React from 'react'
import Hero from './components/hero.jsx'
import Impact from "./components/impact.jsx";
import Initiatives from "./components/initiatives.jsx";
import NewsGallery from './components/newsSlider.jsx';
import './Achievement.css';

const Achivment = () => {
    return (
        <div>

            <Hero />


            <Impact />

            <Initiatives />

            <NewsGallery itemsPerPage={12} />
        </div>
    )
}

export default Achivment
