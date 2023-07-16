import React from "react";
import { Box } from "@mui/system";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "260px",
  position: "relative",
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
};

const center = {
  lat: 37.7749, // Replace with your desired latitude
  lng: -122.4194, // Replace with your desired longitude
};

function Form() {
  return (
    <Box>
      {/* Your form fields go here */}
      {/* <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {/* Additional map components or markers can be added here */}
      {/* </GoogleMap> */}
      {/* </LoadScript> */}
    </Box>
  );
}

export default Form;
