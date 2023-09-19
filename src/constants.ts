import { IHotel, IRoom } from "./interfaces/hotels";

export const LIMIT_SHOW = 3;

export const mockRoom: IRoom = {
  id: "sampleRoomId",
  name: "sampleRoomName",
  longDescription: "long description of the room",
  occupancy: {
    maxAdults: 3,
    maxChildren: 3,
    maxOverall: 6,
  },
  shortDescription: "short description of the room",
  images: [
    {
      url: "https://example-image.com/1.jpeg",
    },
    {
      url: "https://example-image.com/2.jpeg",
    },
  ],
};

export const mockHotel: IHotel = {
  id: "sampelHotelId",
  name: "sampleHotelName",
  address1: "sampleAddress1",
  address2: "sampleAddress2",
  description: "sampleDescription",
  starRating: 5,
  images: [
    {
      url: "https://example-image.com/1.jpeg",
    },
    {
      url: "https://example-image.com/2.jpeg",
    },
  ],
};

export const fiveRatingHotel: IHotel = {
  id: "fiveRatingHotel",
  name: "fiveRatingHotelName",
  address1: "sampleAddress1",
  address2: "sampleAddress2",
  description: "sampleDescription",
  starRating: 5,
  images: [{ url: "https://example-image.com/1.jpeg" }],
};

export const twoRatingHotel: IHotel = {
  id: "twoRatingHotel",
  name: "twoRatingHotelName",
  starRating: 2,
  address1: "sampleAddress1",
  address2: "sampleAddress2",
  description: "sampleDescription",
  images: [{ url: "https://example-image.com/1.jpeg" }],
};
