import React from "react";
import { Stack, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const EventSummary = ({ data, today = false }) => {
  return (
    <Stack
      flexDirection={"row"}
      sx={{
        width: "85%",
      }}
    >
      <Stack
        pr={3}
        sx={{ borderRight: "1px solid #bdbdbd", borderRightWidth: 2 }}
      >
        <Typography variant="h2" fontWeight={"bold"}>
          {data.Date}
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
          {data.monthyear}
        </Typography>
      </Stack>
      <Stack pl={3}>
        {today ? (
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            <Stack
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="body1" sx={{ color: "grey" }}>
                <CalendarMonthOutlinedIcon sx={{ color: "#ffcc00" ,pr:1}} />
              </Typography>
              <Typography variant="body1" sx={{ color: "grey" }}>
                {data.time}
              </Typography>
            </Stack>

            <Stack
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="body1" sx={{ color: "grey" }}>
                <EmailOutlinedIcon sx={{ color: "#ffcc00",paddingRight:1 }} />
              </Typography>
              <Typography variant="body1" sx={{ color: "grey" }}>
                {data.place}
              </Typography>
            </Stack>
          </Stack>
        ) : (
          <Typography variant="body1" sx={{ color: "grey" }}>
            {data.StartEnd}
          </Typography>
        )}
        <Typography variant="subtitle1" fontWeight={"bold"}>
          {data.title}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default EventSummary;
