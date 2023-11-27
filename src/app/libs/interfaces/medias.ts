import { UUID } from "crypto";

export interface Medias {
  id: UUID | string;
  value: string[];
  name: string[];
}
