import { UUID } from "crypto";
import { Artwork } from "./artworks";

export interface Collections {
  id: UUID | string;
  artworks: Artwork["id"][] | null;
  created_at: Date | number | null;
  updated_at: Date | number | null;
  deleted_at: Date | number | null;
  favorites: Artwork["id"][] | null;
}
