import React from "react";
import Intro from "./components/Intro";

import Layout from "./components/Layout";
import Contri from "./components/Contribute";
import Testimonial from "./components/Testimonial";
import WhatsAppButton from "../Whatsapp/Whatsapp";
import Footer from "../Footer/Footer"
function Home() {
    return (
        <div>
            <Intro />

            <Layout />
            <Contri />
            <Testimonial />
            <Footer />
            <WhatsAppButton />


        </div>
    );
}

export default Home;
