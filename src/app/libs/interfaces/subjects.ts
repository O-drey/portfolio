import { UUID } from "crypto";
import { Users } from "./users";

export interface Subjects {
  id: UUID | string;
  title: string;
  subtitle?: string | null;
  content: string;
  by_userId: Users["id"];
  likes: Users["id"][];
}
