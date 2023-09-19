import { useState, useEffect, useMemo, useCallback } from "react";
import { Container, Stack, Grid, Typography } from "@mui/material";

import { IHotelList, IFilter } from "../interfaces/hotels";

import HotelItem from "./HotelItem";
import { Filter } from "../components";
import config from "../config";
import { fetchHotels, fetchRooms } from "../api";

const cf = config();

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<IHotelList>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getHotelsAndRooms = useCallback(async (collectionId: string) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetchHotels(collectionId);
      const hotels = response.data;

      const fetchRoomsPromises = hotels.map((h) =>
        fetchRooms(collectionId, h.id)
      );
      const roomsResponse = await Promise.all(fetchRoomsPromises);

      hotels.forEach((h, index) => {
        h.rooms = roomsResponse[index].data.rooms;
      });

      setHotels(hotels);
      setErrorMessage("");
    } catch (e) {
      setErrorMessage("Sorry but unable to load hotels and their rooms!");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getHotelsAndRooms(cf.collectionId);
  }, [getHotelsAndRooms]);

  const [filter, setFilter] = useState<IFilter>({
    rating: 1,
    maxAdults: 0,
    maxChildren: 0,
  });

  const filteredHotels = useMemo(() => {
    const filtered: IHotelList = [];
    hotels.forEach((h) => {
      if (h.starRating < filter.rating) return;
      const rooms = h.rooms?.filter(
        (r) =>
          r.occupancy.maxAdults >= filter.maxAdults &&
          r.occupancy.maxChildren >= filter.maxChildren
      );
      filtered.push({
        ...h,
        rooms,
      });
    });
    return filtered;
  }, [hotels, filter]);

  return (
    <Stack marginTop={-4} sx={{ background: "#e6e2ea" }}>
      <Filter data={filter} onChange={setFilter} />
      <Container maxWidth="md" sx={{ my: 3 }}>
        {loading ? (
          <Typography variant="h3" align="center">
            Loading...
          </Typography>
        ) : errorMessage ? (
          <Typography role="error-alert" variant="h3" align="center" pt={3}>
            {errorMessage}
          </Typography>
        ) : (
          <Grid container rowSpacing={2}>
            {!!filteredHotels.length &&
              filteredHotels.map((h, index) => (
                <Grid key={index} item xs={12}>
                  <HotelItem data={h} />
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </Stack>
  );
};

export default HotelList;
