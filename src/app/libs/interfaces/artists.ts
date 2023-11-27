import { UUID } from "crypto";
import type { Jobs } from "./jobs";
import { Artwork } from "./artworks";

export interface Artists {
  id: UUID | string;
  firstname?: string | null;
  lastname?: string | null;
  artist_name?: string | null;
  job: Jobs[] | null;
  nationality: string | string[];
  careerDates?: {
    debut: Date | number | null;
    end: Date | number | null;
  };
  img?: string | null;
  artworks: Artwork[];
}
