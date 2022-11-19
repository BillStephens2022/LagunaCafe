import React from "react";

function Map() {
    
    return (

        <div className="map">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97810.06232955445!2d-74.23465487902206!3d39.99583782130813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19ce4a38e7105%3A0x3f5b6f5b358b3cb0!2sToms%20River%2C%20NJ!5e0!3m2!1sen!2sus!4v1667577813865!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{ border: "0" }}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    
    );

};

export default Map;