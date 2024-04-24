import {BrowserRouter, Routes ,Route} from "react-router-dom";
import React from "react";
import HomePage from '../pages/homepage';
import ServicesPage from '../pages/servicespage';
import AboutUsPage from '../pages/aboutuspage';
import TestPage from '../pages/testpage';
import ContactUsPage from '../pages/contactuspage';

function Route1(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route index element = {<HomePage/>}/>
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/aboutus" element={<AboutUsPage/>}/>
            <Route path="/test" element={<TestPage/>}/>
            <Route path="/contactus" element={<ContactUsPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Route1;