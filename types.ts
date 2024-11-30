import { SupabaseClient } from "@supabase/supabase-js";
import { Database, Tables } from "./constants/database.types";

export type TypedSupabaseClient = SupabaseClient<Database>;
export type Contest = Tables<"contests">;
export type Criteria = Tables<"criteria">;
export type Application = Tables<"applications">;
export type Nomination = Tables<"nominations">;
