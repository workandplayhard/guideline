export interface IUpDownProps {
  label: string;
  value: number;
  upperLimit?: number;
  lowerLimit?: number;
  onChange: (value: number) => void;
}

export interface IImage {
  url: string;
  alt?: string;
}

export interface IHotel {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  images: Array<IImage>;
  starRating: number;
  rooms?: Array<IRoom>;
}

export interface IRoom {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
  };
  images: Array<IImage>;
}

export interface IRoomsResponse {
  rooms: Array<IRoom>;
}

export interface IHotelList extends Array<IHotel> {}

export interface IFilter {
  rating: number;
  maxAdults: number;
  maxChildren: number;
}

export type Occupancy = "adults" | "children";

export interface IFilterProps {
  data: IFilter;
  onChange: (filter: IFilter) => void;
}
