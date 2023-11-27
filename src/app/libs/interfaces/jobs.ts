import { UUID } from "crypto";

export interface Jobs {
  id: UUID | string;
  value: string;
}
