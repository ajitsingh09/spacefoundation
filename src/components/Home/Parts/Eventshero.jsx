import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Eventcard } from "../../../dummydata";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Eventhero = () => {
  const [isHovered, setIsHovered] = useState(-1);
  const handleHover = (index) => {
    setIsHovered(index);
  };
  return (
    <>
      <Stack padding={"15% 0 5% 5%"} direction={"row"} >
        <Stack gap={"80px"} width={"60%"}>
          {Eventcard.map((val, index) => (
            <Stack direction={"row"}>
              <Stack
                sx={{
                  height: "fit-content",
                  borderbottom: "1px solid #ffcc00",
                  borderRightWidth: 1,
                }}
              >
                <Box
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHover(-1)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 490,
                    backgroundImage: `url(${val?.cover})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundColor:
                        isHovered === index
                          ? "rgba(255, 204, 0,0.8)"
                          : "transparent",

                      opacity: isHovered === index ? 1 : 0,
                      transition: "all 0.7s ease",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        width: "120px",
                        height: "120px",
                      }}
                    >
                      <img
                        className="fade-in-animation"
                        src={val?.png}
                        alt="img"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </Box>
                  </Box>
                </Box>

                <Stack pt={3} gap={"70px"} rowGap={"30px"}>
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    gap={"50px"}
                    sx={{
                      borderBottom: "2px solid #ffcc00",
                      borderBottomWidth: 4,
                      padding: "39px 0 39px 39px",
                    }}
                  >
                    <Box display={"flex"} flexDirection={"row"} gap={"50px"}>
                      <Box>
                        <Typography variant="h2" fontWeight={"bold"}>
                          {val.Date}
                        </Typography>
                        <Typography
                          mb={1}
                          sx={{
                            content: "''",
                            width: "65px",
                            height: "3px",

                            backgroundColor: "#ffcd00",
                          }}
                        ></Typography>
                        <Typography variant="body1" pb={1}>
                          {val.monthyear}
                        </Typography>{" "}
                      </Box>
                      <Box>
                        <Typography
                          mb={1}
                          sx={{
                            content: "''",
                            width: "3px",
                            height: "140px",

                            backgroundColor: "#bdbdbd",
                          }}
                        ></Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box display={"flex"} flexDirection={"row"} gap={"20px"}>
                        <Box display={"flex"} flexDirection={"row"}>
                          <Typography variant="body1" sx={{ color: "grey" }}>
                            <CalendarMonthOutlinedIcon
                              sx={{ color: "#ffcc00", pr: 1 }}
                            />
                          </Typography>
                          <Typography>{val.time}</Typography>
                        </Box>
                        <Box display={"flex"} flexDirection={"row"}>
                          <Typography variant="body1" sx={{ color: "grey" }}>
                            <EmailOutlinedIcon
                              sx={{ color: "#ffcc00", pr: 1 }}
                            />
                          </Typography>
                          <Typography>{val.place}</Typography>
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        ColumnGap={"10px"}
                      >
                        <Typography
                          variant="h6"
                          fontWeight={"bold"}
                          sx={{
                            cursor: "pointer",
                            "&:hover": {
                              color: "#ffcc00",
                            },
                          }}
                        >
                          {val.title}
                        </Typography>
                        <Typography>{val.des}</Typography>{" "}
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack width={"40%"} paddingLeft={"30px"}>
          <Box>
            <Typography variant="h5">What is Space Foundation?</Typography>
            <Typography>
              Space Foundatiom is a new type of fundraising where you can raise
              funds for your own personal cause, even if you're not a registered
              charity.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Eventhero;
