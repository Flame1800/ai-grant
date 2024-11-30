export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    graphql_public: {
        Tables: {
            [_ in never]: never
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            graphql: {
                Args: {
                    operationName?: string
                    query?: string
                    variables?: Json
                    extensions?: Json
                }
                Returns: Json
            }
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
    public: {
        Tables: {
            applications: {
                Row: {
                    app_budget: number | null
                    contest_id: number
                    description: string | null
                    gpt_analysis: string | null
                    gpt_score: number | null
                    id: number
                    link: string | null
                    llama_analysis: string | null
                    llama_score: number | null
                    nomination_id: number | null
                    title: string | null
                }
                Insert: {
                    app_budget?: number | null
                    contest_id: number
                    description?: string | null
                    gpt_analysis?: string | null
                    gpt_score?: number | null
                    id?: number
                    link?: string | null
                    llama_analysis?: string | null
                    llama_score?: number | null
                    nomination_id?: number | null
                    title?: string | null
                }
                Update: {
                    app_budget?: number | null
                    contest_id?: number
                    description?: string | null
                    gpt_analysis?: string | null
                    gpt_score?: number | null
                    id?: number
                    link?: string | null
                    llama_analysis?: string | null
                    llama_score?: number | null
                    nomination_id?: number | null
                    title?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "applications_contest_id_fkey"
                        columns: ["contest_id"]
                        isOneToOne: false
                        referencedRelation: "contests"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "applications_nomination_id_fkey"
                        columns: ["nomination_id"]
                        isOneToOne: false
                        referencedRelation: "nominations"
                        referencedColumns: ["id"]
                    },
                ]
            }
            contest_criteria: {
                Row: {
                    contest_id: number
                    criteria_id: number | null
                    id: number
                    weight: number | null
                }
                Insert: {
                    contest_id: number
                    criteria_id?: number | null
                    id?: number
                    weight?: number | null
                }
                Update: {
                    contest_id?: number
                    criteria_id?: number | null
                    id?: number
                    weight?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "project_criteria_contest_id_fkey"
                        columns: ["contest_id"]
                        isOneToOne: false
                        referencedRelation: "contests"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "project_criteria_criteria_id_fkey"
                        columns: ["criteria_id"]
                        isOneToOne: false
                        referencedRelation: "criteria"
                        referencedColumns: ["id"]
                    },
                ]
            }
            contest_nomination: {
                Row: {
                    contest_id: number
                    id: number
                    nomination_id: number | null
                }
                Insert: {
                    contest_id: number
                    id?: number
                    nomination_id?: number | null
                }
                Update: {
                    contest_id?: number
                    id?: number
                    nomination_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "contest_nomination_contest_id_fkey"
                        columns: ["contest_id"]
                        isOneToOne: false
                        referencedRelation: "contests"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "contest_nomination_nomination_id_fkey"
                        columns: ["nomination_id"]
                        isOneToOne: false
                        referencedRelation: "nominations"
                        referencedColumns: ["id"]
                    },
                ]
            }
            contests: {
                Row: {
                    budget: number | null
                    description: string | null
                    id: number
                    link: string | null
                    title: string
                }
                Insert: {
                    budget?: number | null
                    description?: string | null
                    id?: number
                    link?: string | null
                    title: string
                }
                Update: {
                    budget?: number | null
                    description?: string | null
                    id?: number
                    link?: string | null
                    title?: string
                }
                Relationships: []
            }
            criteria: {
                Row: {
                    description: string | null
                    id: number
                    title: string
                }
                Insert: {
                    description?: string | null
                    id?: number
                    title: string
                }
                Update: {
                    description?: string | null
                    id?: number
                    title?: string
                }
                Relationships: []
            }
            nominations: {
                Row: {
                    id: number
                    name: string
                }
                Insert: {
                    id?: number
                    name: string
                }
                Update: {
                    id?: number
                    name?: string
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
    PublicTableNameOrOptions extends
            | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
            Database[PublicTableNameOrOptions["schema"]]["Views"])
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R
        }
        ? R
        : never
    : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
            PublicSchema["Views"])
        ? (PublicSchema["Tables"] &
            PublicSchema["Views"])[PublicTableNameOrOptions] extends {
                Row: infer R
            }
            ? R
            : never
        : never

export type TablesInsert<
    PublicTableNameOrOptions extends
            | keyof PublicSchema["Tables"]
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
            Insert: infer I
        }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
        ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
                Insert: infer I
            }
            ? I
            : never
        : never

export type TablesUpdate<
    PublicTableNameOrOptions extends
            | keyof PublicSchema["Tables"]
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
            Update: infer U
        }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
        ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
                Update: infer U
            }
            ? U
            : never
        : never

export type Enums<
    PublicEnumNameOrOptions extends
            | keyof PublicSchema["Enums"]
        | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
        : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
        ? PublicSchema["Enums"][PublicEnumNameOrOptions]
        : never

export type CompositeTypes<
    PublicCompositeTypeNameOrOptions extends
            | keyof PublicSchema["CompositeTypes"]
        | { schema: keyof Database },
    CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
            schema: keyof Database
        }
        ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
        : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
    ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
        ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
        : never
