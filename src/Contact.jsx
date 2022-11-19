import React from "react";
import "./contactstyles.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Map from "./Map";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="Welcome">
                <h1 className="contact-title-text">Laguna Cafe</h1>
                <h3 className="contact-location">123 Main St, Toms River, NJ</h3>
                <h3 className="contact-location">(555)-555-5555</h3>   
            </div> 
            <div className="row">
                <div className="col-lg-4">
                    <div className="hours">
                        <p className="hours-title">Hours of Operation:</p>
                        <p className="days">Monday: Closed</p>
                        <p className="days">Tuesday: Closed</p>
                        <p className="days">Wednesday: 12PM - 9PM</p>
                        <p className="days">Thursday: 12PM - 9PM</p>
                        <p className="days">Friday: 12PM - 9PM</p>
                        <p className="days">Saturday: 12PM - 11PM</p>
                        <p className="days">Sunday: 12PM -11PM</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-form-wrapper d-flex justify-content-center">
                        <form action="#" className="contact-form">
                            <h5 className="title">Contact us</h5>
                            <p className="description">Feel free to contact us and we welcome all feedback!</p>
                            <div>
                                <input type="text" className="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required/>
                            </div>
                            <div>
                                <input type="email" className="form-control rounded border-white mb-3 form-input" placeholder="Email" required/>
                            </div>
                            <div>
                                <textarea id="message" className="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
                            </div>
                            <div className="submit-button-wrapper">
                                <input type="submit" value="Send"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 map-wrapper">
                    <Map />
                </div> 
            </div>
            <Footer />
        </div>
    );
};

export default Contact;