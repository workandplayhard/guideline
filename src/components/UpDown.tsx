import { useMemo } from "react";
import { Link, Typography, Box } from "@mui/material";

import { IUpDownProps } from "../interfaces/hotels";

const UpDown = ({
  label = "",
  value = 0,
  upperLimit = undefined,
  lowerLimit = undefined,
  onChange,
}: IUpDownProps) => {
  const reachedUpperLimit = useMemo(
    () => (upperLimit !== undefined ? value >= upperLimit : false),
    [value, upperLimit]
  );
  const reachedLowerLimit = useMemo(
    () => (lowerLimit !== undefined ? value <= lowerLimit : false),
    [value, lowerLimit]
  );

  const onAction = (direction: "up" | "down") => () => {
    onChange(value + (direction === "up" ? 1 : -1));
  };

  return (
    <Box display="flex" alignItems="baseline" color="#bba189">
      {!!label && (
        <Typography role="text" component="span">
          {label}
        </Typography>
      )}
      <Link
        role="up"
        component="button"
        sx={{ mx: "3px", fontWeight: "bold" }}
        underline="none"
        onClick={onAction("up")}
        disabled={reachedUpperLimit}
      >
        &nbsp;+&nbsp;
      </Link>
      <Typography role="value" component="span">
        {value}
      </Typography>
      <Link
        role="down"
        component="button"
        sx={{ mx: "3px", fontWeight: "bold" }}
        underline="none"
        onClick={onAction("down")}
        disabled={reachedLowerLimit}
      >
        &nbsp;-&nbsp;
      </Link>
    </Box>
  );
};

export default UpDown;
