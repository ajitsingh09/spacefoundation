import React from "react";

const Mapevent = () => {
  const mapStyle = {
    height: "550px",
    width: "100%",
  };

  return (
    <div id="map-container">
      <iframe
        title="Google Map"
        src={`https://www.google.com/maps/d/embed?mid=1RSE7ONdGt4MagwkBuCNzw1jWdyV8PZI&ehbc=2E312F" width="640" height="480`}
        width="100%"
        height="200"
        style={mapStyle}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Mapevent;
