import React from 'react'
//import ContactHeader from './component/ContactHeader '
import GetInTouch from './component/GetInTouch'
import Follows from './component/Follows'
import WhatsAppButton from '../Whatsapp/Whatsapp'
import Footer from '../Footer/Footer'

const Contact = () => {
    return (
        <div>
            {/* <ContactHeader /> */}
            <GetInTouch />
            <Follows />
            <WhatsAppButton/>
            <Footer/>

        </div>
    )
}

export default Contact

