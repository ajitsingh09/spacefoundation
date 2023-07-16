import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/system";

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
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Stack direction={"column"} gap={"20px"}>
          <Stack direction={"row"}>
            <TextField
              id="outlined-select-currency-native"
              select
              SelectProps={{
                native: true,
              }}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
          </Stack>
          <Stack direction={"row"}>
            <TextField id="outlined-basic" label="Phone" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </Stack>
        </Stack>
      </div>
    </Box>
  );
}
