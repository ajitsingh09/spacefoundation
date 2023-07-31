import * as React from "react";
import { Stack, Box, Typography, TextField } from "@mui/material";
import Button from "../../utils/Button";

const currencies = [
  {
    label: "How can we help other?",
  },
  {
    label: "How can we help other?",
  },
  {
    label: "How can we help other?",
  },
  {
    label: "How can we help other?",
  },
];

export default function SelectTextFields() {
  return (
    <>
      <Stack
        height={"100%"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          pb={4}
          sx={{ width: "90%" }}
        >
          We are experts in Space Foundation services and solutions
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { mb: 1, width: { xs: "100%", md: "40%" } },
          }}
          noValidate
          autoComplete="off"
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ width: "100%" }}
            justifyContent={"center"}
            flexWrap={"wrap"}
            alignItems={"center"}
            gap={2}
          >
            <TextField
              sx={{ width: { xs: "100%", md: 200 } }}
              id="outlined-select-currency-native"
              select
              SelectProps={{
                native: true,
              }}
            >
              {currencies.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              sx={{ width: { xs: "100%", md: 200 } }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              sx={{ width: { xs: "100%", md: 200 } }}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />
            <TextField
              sx={{ width: { xs: "100%", md: 200 } }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Stack>
          <Stack
            maxWidth={600}
            sx={{ width: "100%" }}
            justifyContent={"center"}
            alignItems={"center"}
            pt={2}
          >
            <Button
              sx={{
                width: "50%",
                color: "black",
                backgroundColor: "#ffcd00",
                "&:hover": { backgroundColor: "white" },
                fontWeight: "bold",
              }}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
