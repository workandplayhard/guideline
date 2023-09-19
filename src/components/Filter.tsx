import { Rating, Container, useTheme, useMediaQuery } from "@mui/material";

import UpDown from "./UpDown";

import { IFilterProps, Occupancy } from "../interfaces/hotels";

const Filter = ({ data, onChange }: IFilterProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const onChangeRating = (
    _: React.SyntheticEvent<Element, Event>,
    v: number | null
  ) => {
    onChange({
      ...data,
      rating: v ?? data.rating,
    });
  };

  const onChangeOccupancy = (type: Occupancy) => (v: number) => {
    onChange({
      ...data,
      [type === "adults" ? "maxAdults" : "maxChildren"]: v,
    });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        border: "2px solid #bba189",
        py: 1,
        backgroundColor: "#e6e2ea",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Rating value={data.rating} onChange={onChangeRating} size="large" />
      <UpDown
        label="Adults: "
        lowerLimit={0}
        value={data.maxAdults}
        onChange={onChangeOccupancy("adults")}
      />
      <UpDown
        label="Children: "
        lowerLimit={0}
        value={data.maxChildren}
        onChange={onChangeOccupancy("children")}
      />
    </Container>
  );
};

export default Filter;
