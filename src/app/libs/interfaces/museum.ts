import { UUID } from "crypto";

export interface Museum {
  id: UUID | string;
  name: string;
  second_name: string;
  pictures: string[];
  address: string | GeolocationCoordinates;
  open_hours: Date[];
}
