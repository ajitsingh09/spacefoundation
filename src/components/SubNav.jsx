import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import DarkButton from "./utils/DarkButton";

const SubNav = () => {
  const navigate = useNavigate();
  const [popoverState, setPopoverState] = useState({});

  const handleMouseEnter = (linkId) => {
    setPopoverState((prevState) => ({
      ...prevState,
      [linkId]: true,
    }));
  };

  const handleMouseLeave = (linkId) => {
    setPopoverState((prevState) => ({
      ...prevState,
      [linkId]: false,
    }));
  };

  const isPopoverOpen = (linkId) => Boolean(popoverState[linkId]);
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      alignSelf={"center"}
      spacing={6}
      m={"auto"}
      sx={{
        width: "90%",
        height: "12vh",
        bgcolor: "#ffcc00",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignContent="center"
        gap={3}
        pl={3}
        sx={{ color: "white", height: "100%", paddingRight: 10 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          className="navlink-box"
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Link to="/our-work" className="navlink-link">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography
                  alignSelf="center"
                  display="inline-block"
                  fontFamily={"UbuntuMedium"}
                  fontSize={16}
                  className="navlink"
                >
                  OUR WORK
                </Typography>
                <KeyboardArrowDownIcon
                  className="navlink-link-downarrow"
                  sx={{ fontSize: 15 }}
                />
              </Box>
            </Link>

            <Stack
              sx={{
                height: isPopoverOpen(1) ? 160 : 0,
                opacity: isPopoverOpen(1) ? 1 : 0,
                transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                position: "absolute",
                top: 47,
                left: 40,
                overflow: "hidden",
                backgroundColor: "white",
                zIndex: 1,
              }}
            >
              <Stack
                justifyContent={"center"}
                gap={1}
                sx={{ p: 2, width: 140 }}
              >
                <Link to="#" className="popperLinks">
                  <Typography sx={{}}>Space Group</Typography>
                </Link>
                <Link to="/our-story/mission-vision" className="popperLinks">
                  <Typography sx={{}}>Mission & Vission</Typography>
                </Link>
                <Link
                  to="/our-story/awards-recognitions"
                  className="popperLinks"
                >
                  <Typography sx={{}}>Awards & Recognitions</Typography>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Link to="/our-story" className="navlink-link">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography
                  alignSelf="center"
                  display="inline-block"
                  fontFamily={"UbuntuMedium"}
                  fontSize={16}
                >
                  OUR STORY
                </Typography>
                <KeyboardArrowDownIcon
                  className="navlink-link-downarrow"
                  sx={{ fontSize: 15 }}
                />
              </Box>
            </Link>

            <Stack
              sx={{
                height: isPopoverOpen(2) ? 260 : 0,
                opacity: isPopoverOpen(2) ? 1 : 0,
                transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                position: "absolute",
                top: 47,
                left: 40,
                overflow: "hidden",
                backgroundColor: "white",
                zIndex: 1,
              }}
            >
              <Stack
                justifyContent={"center"}
                gap={1}
                sx={{ p: 2, width: 140 }}
              >
                <Link to="#" className="popperLinks">
                  <Typography sx={{}}>Events</Typography>
                </Link>
                <Link to="/our-work/world-space-week" className="popperLinks">
                  <Typography sx={{}}>World Space Week</Typography>
                </Link>
                <Link
                  to="/our-work/all-india-asteroid-search-campaign"
                  className="popperLinks"
                >
                  <Typography sx={{}}>
                    All India Aestroid search campaign
                  </Typography>
                </Link>
                <Link to="#" className="popperLinks">
                  <Typography sx={{}}>Projects</Typography>
                </Link>
                <Link to="/our-work/sgvpk" className="popperLinks">
                  <Typography sx={{}}>
                    SPACE Gram Vigran Prachar Kendra : SGVPK
                  </Typography>
                </Link>
                <Link to="#" className="popperLinks">
                  <Typography sx={{}}>SPACE CALENDER</Typography>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Link to="/our-impact" className="navlink-link">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography
                  alignSelf="center"
                  display="inline-block"
                  fontFamily={"UbuntuMedium"}
                  fontSize={16}
                >
                  OUR IMPACT
                </Typography>
                <KeyboardArrowDownIcon
                  className="navlink-link-downarrow"
                  sx={{ fontSize: 15 }}
                />
              </Box>
            </Link>

            <Stack
              sx={{
                height: isPopoverOpen(3) ? 160 : 0,
                opacity: isPopoverOpen(3) ? 1 : 0,
                transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                position: "absolute",
                top: 47,
                left: 40,
                overflow: "hidden",
                backgroundColor: "white",
                zIndex: 1,
              }}
            >
              <Stack
                justifyContent={"center"}
                gap={1}
                sx={{ p: 2, width: 140 }}
              >
                <Link
                  to="/our-impact/fighting-against-light-pollution"
                  className="popperLinks"
                >
                  <Typography sx={{}}>
                    FIGHTING AGAINST LIGHT POLLUTION
                  </Typography>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Link to="#" className="navlink-link">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography
                  alignSelf="center"
                  display="inline-block"
                  fontFamily={"UbuntuMedium"}
                  fontSize={16}
                >
                  TAKE ACTIONS
                </Typography>
                <KeyboardArrowDownIcon
                  className="navlink-link-downarrow"
                  sx={{ fontSize: 15 }}
                />
              </Box>
            </Link>

            <Stack
              sx={{
                height: isPopoverOpen(4) ? 160 : 0,
                opacity: isPopoverOpen(4) ? 1 : 0,
                transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                position: "absolute",
                top: 47,
                left: 40,
                overflow: "hidden",
                backgroundColor: "white",
                zIndex: 1,
              }}
            >
              <Stack
                justifyContent={"center"}
                gap={1}
                sx={{ p: 2, width: 140 }}
              >
                <Link to="/donate" className="popperLinks">
                  <Typography sx={{}}>DONATE NOW</Typography>
                </Link>
                <Link to="/volunteer" className="popperLinks">
                  <Typography sx={{}}>VOLUNTEER US</Typography>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={() => handleMouseLeave(5)}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Link to="#" className="navlink-link">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography
                  alignSelf="center"
                  display="inline-block"
                  fontFamily={"UbuntuMedium"}
                  fontSize={16}
                >
                  MEDIA
                </Typography>
                <KeyboardArrowDownIcon
                  className="navlink-link-downarrow"
                  sx={{ fontSize: 15 }}
                />
              </Box>
            </Link>

            <Stack
              sx={{
                height: isPopoverOpen(5) ? 160 : 0,
                opacity: isPopoverOpen(5) ? 1 : 0,
                transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                position: "absolute",
                top: 47,
                left: 40,
                overflow: "hidden",
                backgroundColor: "white",
                zIndex: 1,
              }}
            >
              <Stack
                justifyContent={"center"}
                gap={1}
                sx={{ p: 2, width: 140 }}
              >
                <Link to="/space-in-news" className="popperLinks">
                  <Typography sx={{}}>SPACE IN NEWS</Typography>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={() => handleMouseLeave(6)}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Link to="/contact-us" className="navlink-link">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography
                  alignSelf="center"
                  display="inline-block"
                  fontFamily={"UbuntuMedium"}
                  fontSize={16}
                >
                  CONTACT US
                </Typography>
                <KeyboardArrowDownIcon
                  className="navlink-link-downarrow"
                  sx={{ fontSize: 15 }}
                />
              </Box>
            </Link>

            <Stack
              sx={{
                height: isPopoverOpen(6) ? 160 : 0,
                opacity: isPopoverOpen(6) ? 1 : 0,
                transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                position: "absolute",
                top: 47,
                left: 40,
                overflow: "hidden",
                backgroundColor: "white",
                zIndex: 1,
              }}
            >
              <Stack
                justifyContent={"center"}
                gap={1}
                sx={{ p: 2, width: 140 }}
              >
                <Link to="#" className="popperLinks">
                  <Typography sx={{}}>CAREERS</Typography>
                </Link>
                <Link to="#" className="popperLinks">
                  <Typography sx={{}}>GLOBAL</Typography>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </div>
      </Stack>
      
    </Stack>
  );
};

export default SubNav;
