import React from "react";
import TextField from "@mui/material/TextField";

interface TextFieldProps {
  label: string;
  value: string;
}

function Textfield({ label, value }: TextFieldProps) {
  return (
    <TextField
    sx={{
        "& > :not(style)": {
          color: "white",
          opacity:"60%"
        },
        "& .MuiInput-underline:before": {
          borderBottomColor: "white",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottomColor: "white",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "white",
        },
      }}
      id="filled-read-only-input"
      label={label}
      defaultValue={value}
      InputProps={{
        readOnly: true,
      }}
      variant="standard"
    />
  );
}

export default Textfield;
