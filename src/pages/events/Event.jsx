import React from 'react'
import Swipper from './ComponentsE/Swipper'
import Card from './ComponentsE/Card'
import Eventlist from '../events/ComponentsE/Eventlist'
import WhatsAppButton from '../Whatsapp/Whatsapp'
import Event2 from '../Event2/Event2'
import Footer from '../Footer/Footer'


const Event = () => {
    return (
        <div>
            {/* <Swipper /> */}

            {/* <Eventlist /> */}
            <Event2 />
            <WhatsAppButton />

            <Footer />
        </div>
    )
}

export default Event
