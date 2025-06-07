import React from 'react'
import Intro from './components/Intro'
import Mission from './components/Mission'
import People from './components/People'
import Impact from './components/Impact'
import Sponsors from './components/Sponsers'
const About = () => {
    return (
        <div>
            <Intro/>
            {/* <Mission/> */}
            <Impact/>
            <People/>
            <Sponsors/>

            
        </div>
    )
}

export default About
