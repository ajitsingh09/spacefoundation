import React, { useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import ImageCard from "./Parts/ImageCard";
import EventSummary from "./Parts/EventSummary";
const Event = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hover = [
    {
      id: 0,
      cover:
        "https://demoapus2.com/crowdngo/wp-content/uploads/2019/08/charity_01-670x453.jpg",
      png: "https://demoapus2.com/crowdngo/wp-content/themes/crowdngo/images/unlink.png",
      monthyear: "june 2023",
      Date: 22,
      StartEnd: "Start: June 18, 2023 | End: June 19, 2023",

      time: "10:00 AM - 07:00 PM",
      place: "Russian & Turkish Baths",
      title: "How do you know if a stock will make you money over time",
    },
    {
      id: 1,
      cover:
        "https://demoapus2.com/crowdngo/wp-content/uploads/2019/08/charity_01-670x453.jpg",
      png: "https://demoapus2.com/crowdngo/wp-content/themes/crowdngo/images/unlink.png",
      monthyear: "june 2023",
      Date: 21,
      StartEnd: "Start: June 17, 2023 | End: June 17, 2023",
      time: "10:00 AM - 07:00 PM",
      place: "India  & Maharashtra Baths",
      title: "lets see whether my javascirpt logic works or not",
    },
    {
      id: 2,
      cover:
        "https://demoapus2.com/crowdngo/wp-content/uploads/2019/08/charity_01-670x453.jpg",
      png: "https://demoapus2.com/crowdngo/wp-content/themes/crowdngo/images/unlink.png",
      monthyear: "june 2023",
      Date: 20,
      StartEnd: "Start: June 16, 2023 | End: June 16, 2023",
      time: "10:00 AM - 07:00 PM",
      place: "Russian & Turkish Baths",
      title: "How do you know if a stock will make you money over time",
    },
  ];
  useEffect(() => {
    const today = new Date();
    const date = today.getDate();
    const index = hover.findIndex((item) => item.Date === date);
    if (index !== -1 && index) {
      setCurrentIndex(index);
      console.log(index, "indexvalue");
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      py={8}
      gap={"20px"}
      sx={{ backgroundColor: "white" }}
    >
      <Typography variant="h4" pb={2} fontWeight={"bold"}>
        UPCOMING EVENTS
      </Typography>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
        sx={{ width: 400 }}
        pb={2}
        gap={2}
      >
        <Typography
          sx={{
            content: "''",
            width: "70px",
            height: "3px",
            backgroundColor: "#ffcd00",
          }}
        ></Typography>
        <DoneOutlinedIcon
          sx={{ color: "#ffcd00", outline: "1px solid #ffcc00" }}
        />
      </Stack>
      <Typography
        variant="h6"
        pb={6}
        sx={{ width: "60%" }}
        textAlign={"center"}
        color={"grey"}
      >
        The Just giving charity provides enhanced services over and above what
        the NHS funds. Our upcoming eventN
      </Typography>
      {/* //!Main Stack */}

      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", maxWidth: 2500 }}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "50%", height: "90%" }}
          gap={2}
        >
          <ImageCard data={hover[currentIndex]} />
          <EventSummary data={hover[currentIndex]} today={true} />
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"} gap="33px">
          {hover.map((item, index) => {
            return <EventSummary data={item} key={index} />;
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Event;
