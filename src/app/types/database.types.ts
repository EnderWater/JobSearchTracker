export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      address: {
        Row: {
          address_id: number
          city_id: number | null
          create_date: string
          state_id: number | null
          street_address: string | null
        }
        Insert: {
          address_id?: number
          city_id?: number | null
          create_date?: string
          state_id?: number | null
          street_address?: string | null
        }
        Update: {
          address_id?: number
          city_id?: number | null
          create_date?: string
          state_id?: number | null
          street_address?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "address_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "city"
            referencedColumns: ["city_id"]
          },
          {
            foreignKeyName: "address_state_id_fkey"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["state_id"]
          },
        ]
      }
      application: {
        Row: {
          application_id: number
          application_status_id: number
          company_id: number
          create_date: string | null
          response_date: string
          submission_date: string
          user_id: string
        }
        Insert: {
          application_id?: number
          application_status_id: number
          company_id: number
          create_date?: string | null
          response_date: string
          submission_date: string
          user_id?: string
        }
        Update: {
          application_id?: number
          application_status_id?: number
          company_id?: number
          create_date?: string | null
          response_date?: string
          submission_date?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_application_status_id_fkey"
            columns: ["application_status_id"]
            isOneToOne: false
            referencedRelation: "application_status"
            referencedColumns: ["application_status_id"]
          },
          {
            foreignKeyName: "application_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["company_id"]
          },
        ]
      }
      application_status: {
        Row: {
          application_status_id: number
          color: string | null
          create_date: string
          name: string
          sort_order: number | null
        }
        Insert: {
          application_status_id?: number
          color?: string | null
          create_date?: string
          name: string
          sort_order?: number | null
        }
        Update: {
          application_status_id?: number
          color?: string | null
          create_date?: string
          name?: string
          sort_order?: number | null
        }
        Relationships: []
      }
      city: {
        Row: {
          city_id: number
          create_date: string
          name: string | null
          state_id: number | null
        }
        Insert: {
          city_id?: number
          create_date?: string
          name?: string | null
          state_id?: number | null
        }
        Update: {
          city_id?: number
          create_date?: string
          name?: string | null
          state_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "county_state_id_fkey"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "state"
            referencedColumns: ["state_id"]
          },
        ]
      }
      company: {
        Row: {
          address_id: number | null
          company_id: number
          create_date: string
          name: string
          phone: string | null
          website: string | null
        }
        Insert: {
          address_id?: number | null
          company_id?: number
          create_date?: string
          name: string
          phone?: string | null
          website?: string | null
        }
        Update: {
          address_id?: number | null
          company_id?: number
          create_date?: string
          name?: string
          phone?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_address_id_fkey"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["address_id"]
          },
        ]
      }
      state: {
        Row: {
          create_date: string
          name: string
          state_id: number
        }
        Insert: {
          create_date?: string
          name: string
          state_id?: number
        }
        Update: {
          create_date?: string
          name?: string
          state_id?: number
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
