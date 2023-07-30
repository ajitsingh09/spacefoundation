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
      <Typography variant="h4" fontWeight={"bold"} pb={4}>
        We are experts in Space Foundation services and solutions
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction={"column"} gap={"20px"}>
          <Stack direction={{ xs: "column", lg: "row" }}>
            <TextField
              sx={{ width: 200 }}
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
              sx={{ width: 200 }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </Stack>
          <Stack direction={{ xs: "column", lg: "row" }}>
            <TextField
              sx={{ width: 200 }}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />
            <TextField
              sx={{ width: 200 }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Stack>
        </Stack>
        <Stack alignItems="left" paddingTop="20px">
          <Button
            variant="contained"
            sx={{
              width: "30%",
              color: "black",
              backgroundColor: "#ffcd00",
              "&:hover": { backgroundColor: "white" },
              fontWeight: "bold",
            }}
          >
            DONATION
          </Button>
        </Stack>
      </Box>
    </>
  );
}
