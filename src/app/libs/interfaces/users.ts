import { UUID } from "crypto";
import type { Artwork } from "./artworks";

export interface Users {
  id: UUID | string;
  firstname: string;
  lastname: string;
  pseudo: string;
  age: number;
  pronom: "elle" | "iel" | "ielle" | "il" | string[];
  mail: string;
  phone?: number | null;
  status: "étudiant·e" | "lycéen·ne" | "freelance" | "salarié·e";
  sector?: string | null;
  jobSearch?: "1er emploi" | "stage" | "alternance" | "école" | null;
  avatar?: string | null; //ajouter image par défaut
  bio?: string;
}

// export type Admin = Omit<Users, "jobSearch" | "status" | "age" | "pseudo">;
