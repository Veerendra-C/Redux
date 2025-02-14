import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtonTw({ name, onClick, disabled }) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        style={{ color: "black", backgroundColor: "#FDF0D5" }}
        onClick={onClick}
        disabled={disabled}
      >
        {name}
      </Button>
    </Stack>
  );
}
