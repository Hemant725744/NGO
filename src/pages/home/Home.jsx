import React from "react";
import Intro from "./components/Intro";
import NPOStatus from "./components/NPOstatus";
import Layout from "./components/layout";
import Contri from "./components/Contribute";
import Testimonial from "./components/Testimonial";
import Footer from "../Footer/Footer"
function Home() {
    return (
        <div>
            <Intro />
            {/* <NPOStatus /> */}
            <Layout />
            <Contri />
            <Testimonial/>
            <Footer/>
          

        </div>
    );
}

export default Home;
