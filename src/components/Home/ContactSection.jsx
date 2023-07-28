import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import BACK from "../../assets/BACK.png";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ylo from "../../assets/ylo.png";
import ylo2 from "../../assets/ylo2.png";

const ContactSection = () => {
  return (
    <Box
      width="100%"
      height="583px"
      sx={{
        backgroundColor: "#2c2b3b",
        left: "-177px",
        backgroundImage: `url(${BACK})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 150px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <Typography
          sx={{
            content: "''",
            width: "70px",
            height: "4px",
            backgroundColor: "#ffcd00",
          }}
        ></Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "300px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box textAlign="center" sx={{ width: "100%" }}>
          <Stack width="100%" justifyContent="center" alignItems="center">
            <Box sx={{ textAlign: "center", width: "900px" }}>
              <Typography variant="h4" color="white" fontWeight="bold">
                Quickly and Easily Find the right Charity 953,128 people raising
                funds now
              </Typography>
              <br></br>
              <br></br>
              <br></br>
            </Box>
            <Box
              textAlign="center"
              width="800px"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="h5"
                color="grey"
                fontSize="18px"
                lineHeight="1.5"
              >
                We do not compare all brands in the market, or all products
                offered by all brands. We do not arrange products from these
                brands for you directly, but we will refer you to our trusted
                partner who can. Learn more about our partnership
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Stack
        direction="row"
        width="100%"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "15%",
            color: "black",
            backgroundColor: "WHITE",
            "&:hover": { backgroundColor: "#ffcd00" },
            fontWeight: "bold",
          }}
        >
          GET STARTED
        </Button>
        <Stack direction="row" gap="10px">
          <PhoneOutlinedIcon
            sx={{
              color: "#ffcd00",
              cursor: "pointer",
              fontSize: "50px",
              paddingLeft: "40px",
            }}
          />
          <Typography
            variant="h4"
            color="white"
            sx={{ display: "flex", alignItems: "center" }}
          >
            +91 9218302999
          </Typography>
        </Stack>
      </Stack>
      <Box></Box>
    </Box>
  );
};

export default ContactSection;
