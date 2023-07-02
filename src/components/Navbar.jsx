import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={6}
            sx={{
              maxWidth: "100vw",
              bgcolor: "none",
              padding: 2,
              height: "15vh",
            }}
          >
            <Box>
              <img src={logo} alt="logo" style={{ width: "200px" }} />
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignContent="center"
              spacing={2}
              sx={{ color: "white", height: 50 }}
            >
              <Typography
                variant="h6"
                component="span"
                alignSelf="center"
                display="inline-block"
              >
                Our Story
              </Typography>
              <Typography
                variant="h6"
                component="span"
                alignSelf="center"
                display="inline-block"
              >
                Our Story
              </Typography>
              <Typography
                variant="h6"
                component="span"
                alignSelf="center"
                display="inline-block"
              >
                Our Story
              </Typography>
              <Typography
                variant="h6"
                component="span"
                alignSelf="center"
                display="inline-block"
              >
                Our Story
              </Typography>
              <Typography
                variant="h6"
                component="span"
                alignSelf="center"
                display="inline-block"
              >
                Our Story
              </Typography>
              <Typography
                variant="h6"
                component="span"
                alignSelf="center"
                display="inline-block"
              >
                Our Story
              </Typography>
            </Stack>
            <Box sx={{ w: 50 }}>
              <Button variant="contained">Donate Now</Button>
            </Box>
          </Stack>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
