import type { UUID } from "crypto";
import { Artists } from "./artists";
import type { Museum } from "./museum";
import type { Medias } from "./medias";
import type { Collections } from "./collections";
import type { Types } from "./types";

export interface Artwork {
  id: UUID | string;
  imgs: string[] | HTMLImageElement[] | File[];
  title: string | null;
  subtitle?: string | null;
  artists: Artists[] | null;
  dates: Date | Date[] | number[];
  description: string | null;
  location?: Museum["id"] | null;
  medias: Medias["id"][];
  type: Types["id"][];
  isFavorite: boolean;
  collections: Collections["id"][];
}
