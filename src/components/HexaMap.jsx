import React from "react";

const Map = () => {
  const mapStyle = {
    height: "280px",
    width: "100%",
    
  };

  return (
    <div id="map-container">
      <iframe
        title="Google Map"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3892856143825!2d77.05106897397663!3d28.58809618609996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b06e184bec1%3A0x30868de87417b43c!2sSPACE%20Foundation!5e0!3m2!1sen!2sin!4v1689924255021!5m2!1sen!2sin" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`}
        width="100%"
        height="200"
        style={mapStyle}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
