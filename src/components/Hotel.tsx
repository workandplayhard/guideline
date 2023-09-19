import { Typography, Rating, Stack, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import { IHotel } from "../interfaces/hotels";

const Hotel = ({ data }: { data: IHotel }) => {
  const { name, address1, address2, images, starRating } = data;

  return (
    <Grid
      container
      columnSpacing={2}
      sx={{ p: 2, width: "100%", marginLeft: 0 }}
    >
      <Grid item xs={5} sm={3} sx={{ paddingLeft: "0!important" }}>
        <Carousel
          indicators={false}
          sx={{ maxWidth: 200 }}
          autoPlay={false}
          navButtonsAlwaysVisible
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img.url}
              width="100%"
              height={150}
              style={{ objectFit: "cover" }}
              alt="Room"
            />
          ))}
        </Carousel>
      </Grid>
      <Grid item xs={7} sm={5} sx={{}}>
        <Stack>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">{address1}</Typography>
          <Typography variant="body1">{address2}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={4} sx={{ textAlign: "right" }}>
        <Rating role="rating" value={starRating} readOnly size="large" />
      </Grid>
    </Grid>
  );
};

export default Hotel;
