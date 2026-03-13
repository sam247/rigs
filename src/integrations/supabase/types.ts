export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      ai_brand_interpretation_inputs: {
        Row: {
          citation_concentration_metrics: Json
          created_at: string
          id: string
          page_citation_counts: Json
          page_types: Json
          project_id: string
          prompt_category_distribution: Json
          run_id: string
        }
        Insert: {
          citation_concentration_metrics: Json
          created_at?: string
          id?: string
          page_citation_counts: Json
          page_types: Json
          project_id: string
          prompt_category_distribution: Json
          run_id: string
        }
        Update: {
          citation_concentration_metrics?: Json
          created_at?: string
          id?: string
          page_citation_counts?: Json
          page_types?: Json
          project_id?: string
          prompt_category_distribution?: Json
          run_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_brand_interpretation_inputs_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_brand_mentions: {
        Row: {
          created_at: string
          engine: string
          first_seen_at: string
          id: string
          last_seen_at: string
          mention_count: number
          page_url: string
          project_id: string
          run_id: string
        }
        Insert: {
          created_at?: string
          engine: string
          first_seen_at?: string
          id?: string
          last_seen_at?: string
          mention_count?: number
          page_url: string
          project_id: string
          run_id: string
        }
        Update: {
          created_at?: string
          engine?: string
          first_seen_at?: string
          id?: string
          last_seen_at?: string
          mention_count?: number
          page_url?: string
          project_id?: string
          run_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_brand_mentions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_brand_prompts: {
        Row: {
          created_at: string
          id: string
          is_custom: boolean
          project_id: string
          prompt_category: string
          prompt_text: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_custom?: boolean
          project_id: string
          prompt_category: string
          prompt_text: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_custom?: boolean
          project_id?: string
          prompt_category?: string
          prompt_text?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_brand_prompts_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_brand_runs: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          project_id: string
          prompt_set_hash: string
          run_id: string
          status: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          project_id: string
          prompt_set_hash: string
          run_id: string
          status: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          project_id?: string
          prompt_set_hash?: string
          run_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_brand_runs_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_brand_snippets: {
        Row: {
          created_at: string
          engine: string
          id: string
          page_url: string
          project_id: string
          prompt_category: string
          run_id: string
          snippet_text: string
        }
        Insert: {
          created_at?: string
          engine: string
          id?: string
          page_url: string
          project_id: string
          prompt_category: string
          run_id: string
          snippet_text: string
        }
        Update: {
          created_at?: string
          engine?: string
          id?: string
          page_url?: string
          project_id?: string
          prompt_category?: string
          run_id?: string
          snippet_text?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_brand_snippets_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_page_signals: {
        Row: {
          audit_page_id: string
          created_at: string
          id: string
          signal_type: string
          signal_value: Json | null
        }
        Insert: {
          audit_page_id: string
          created_at?: string
          id?: string
          signal_type: string
          signal_value?: Json | null
        }
        Update: {
          audit_page_id?: string
          created_at?: string
          id?: string
          signal_type?: string
          signal_value?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_page_signals_audit_page_id_fkey"
            columns: ["audit_page_id"]
            isOneToOne: false
            referencedRelation: "audit_pages"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_page_snapshots: {
        Row: {
          classification_signals: Json | null
          confidence_score: number
          crawl_source: string
          created_at: string
          first_seen_at: string
          h1: string | null
          h2s: string[] | null
          id: string
          internal_links_in: string[] | null
          internal_links_out: string[] | null
          last_crawled_at: string
          page_type: string | null
          project_id: string
          title: string | null
          updated_at: string
          url: string
          word_count: number | null
        }
        Insert: {
          classification_signals?: Json | null
          confidence_score?: number
          crawl_source?: string
          created_at?: string
          first_seen_at?: string
          h1?: string | null
          h2s?: string[] | null
          id?: string
          internal_links_in?: string[] | null
          internal_links_out?: string[] | null
          last_crawled_at?: string
          page_type?: string | null
          project_id: string
          title?: string | null
          updated_at?: string
          url: string
          word_count?: number | null
        }
        Update: {
          classification_signals?: Json | null
          confidence_score?: number
          crawl_source?: string
          created_at?: string
          first_seen_at?: string
          h1?: string | null
          h2s?: string[] | null
          id?: string
          internal_links_in?: string[] | null
          internal_links_out?: string[] | null
          last_crawled_at?: string
          page_type?: string | null
          project_id?: string
          title?: string | null
          updated_at?: string
          url?: string
          word_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_page_snapshots_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_pages: {
        Row: {
          audit_id: string
          created_at: string
          depth: number
          external_links_count: number | null
          h1_text: string | null
          id: string
          internal_links_count: number | null
          page_type: string
          title: string | null
          url: string
          word_count: number | null
        }
        Insert: {
          audit_id: string
          created_at?: string
          depth?: number
          external_links_count?: number | null
          h1_text?: string | null
          id?: string
          internal_links_count?: number | null
          page_type: string
          title?: string | null
          url: string
          word_count?: number | null
        }
        Update: {
          audit_id?: string
          created_at?: string
          depth?: number
          external_links_count?: number | null
          h1_text?: string | null
          id?: string
          internal_links_count?: number | null
          page_type?: string
          title?: string | null
          url?: string
          word_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_pages_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "site_audits"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_signals: {
        Row: {
          audit_id: string
          created_at: string
          evidence: Json | null
          explanation: string
          id: string
          priority: string | null
          signal_id: string
          status: string
          suggested_fix: string | null
        }
        Insert: {
          audit_id: string
          created_at?: string
          evidence?: Json | null
          explanation: string
          id?: string
          priority?: string | null
          signal_id: string
          status: string
          suggested_fix?: string | null
        }
        Update: {
          audit_id?: string
          created_at?: string
          evidence?: Json | null
          explanation?: string
          id?: string
          priority?: string | null
          signal_id?: string
          status?: string
          suggested_fix?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_signals_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "site_audits"
            referencedColumns: ["id"]
          },
        ]
      }
      competitors: {
        Row: {
          created_at: string
          gbp_url: string | null
          has_schema: boolean | null
          id: string
          location_mentions: number | null
          name: string | null
          page_count: number | null
          project_id: string
          rating: number | null
          review_count: number | null
          scraped_at: string | null
          signals: Json | null
          website_url: string | null
        }
        Insert: {
          created_at?: string
          gbp_url?: string | null
          has_schema?: boolean | null
          id?: string
          location_mentions?: number | null
          name?: string | null
          page_count?: number | null
          project_id: string
          rating?: number | null
          review_count?: number | null
          scraped_at?: string | null
          signals?: Json | null
          website_url?: string | null
        }
        Update: {
          created_at?: string
          gbp_url?: string | null
          has_schema?: boolean | null
          id?: string
          location_mentions?: number | null
          name?: string | null
          page_count?: number | null
          project_id?: string
          rating?: number | null
          review_count?: number | null
          scraped_at?: string | null
          signals?: Json | null
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "competitors_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      entity_action_completions: {
        Row: {
          completed: boolean
          completed_at: string | null
          entity_action_id: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          completed_at?: string | null
          entity_action_id: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed?: boolean
          completed_at?: string | null
          entity_action_id?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "entity_action_completions_entity_action_id_fkey"
            columns: ["entity_action_id"]
            isOneToOne: false
            referencedRelation: "entity_actions"
            referencedColumns: ["id"]
          },
        ]
      }
      entity_actions: {
        Row: {
          action_key: string | null
          analysis_run_id: string
          competitor_count: number
          conversion_mode: string | null
          created_at: string
          description: string
          effort_label: string | null
          entity_norm: string
          evidence_ranks: number[]
          evidence_snippets: string[] | null
          evidence_urls: string[]
          id: string
          impact_label: string
          page_url: string
          rank_score: number
          reason: string
          title: string
        }
        Insert: {
          action_key?: string | null
          analysis_run_id: string
          competitor_count: number
          conversion_mode?: string | null
          created_at?: string
          description: string
          effort_label?: string | null
          entity_norm: string
          evidence_ranks: number[]
          evidence_snippets?: string[] | null
          evidence_urls: string[]
          id?: string
          impact_label: string
          page_url: string
          rank_score: number
          reason: string
          title: string
        }
        Update: {
          action_key?: string | null
          analysis_run_id?: string
          competitor_count?: number
          conversion_mode?: string | null
          created_at?: string
          description?: string
          effort_label?: string | null
          entity_norm?: string
          evidence_ranks?: number[]
          evidence_snippets?: string[] | null
          evidence_urls?: string[]
          id?: string
          impact_label?: string
          page_url?: string
          rank_score?: number
          reason?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "entity_actions_analysis_run_id_fkey"
            columns: ["analysis_run_id"]
            isOneToOne: false
            referencedRelation: "keyword_analysis_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      entity_coverage: {
        Row: {
          analysis_run_id: string
          competitor_count: number
          competitor_ranks: number[] | null
          consensus_score: number
          created_at: string
          entity_norm: string
          entity_type_weight: number | null
          final_rank_score: number | null
          id: string
          rank_weight_score: number | null
          user_has_entity: boolean
        }
        Insert: {
          analysis_run_id: string
          competitor_count: number
          competitor_ranks?: number[] | null
          consensus_score: number
          created_at?: string
          entity_norm: string
          entity_type_weight?: number | null
          final_rank_score?: number | null
          id?: string
          rank_weight_score?: number | null
          user_has_entity?: boolean
        }
        Update: {
          analysis_run_id?: string
          competitor_count?: number
          competitor_ranks?: number[] | null
          consensus_score?: number
          created_at?: string
          entity_norm?: string
          entity_type_weight?: number | null
          final_rank_score?: number | null
          id?: string
          rank_weight_score?: number | null
          user_has_entity?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "entity_coverage_analysis_run_id_fkey"
            columns: ["analysis_run_id"]
            isOneToOne: false
            referencedRelation: "keyword_analysis_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      entity_labels: {
        Row: {
          entity_type: string
          entity_value: string
          id: string
          labels: string[]
          project_id: string
          updated_at: string
        }
        Insert: {
          entity_type: string
          entity_value: string
          id?: string
          labels?: string[]
          project_id: string
          updated_at?: string
        }
        Update: {
          entity_type?: string
          entity_value?: string
          id?: string
          labels?: string[]
          project_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "entity_labels_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      explanations: {
        Row: {
          category: string | null
          created_at: string
          explanation_text: string
          id: string
          project_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          explanation_text: string
          id?: string
          project_id: string
        }
        Update: {
          category?: string | null
          created_at?: string
          explanation_text?: string
          id?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "explanations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      google_integrations: {
        Row: {
          access_token: string
          created_at: string
          expires_at: string
          id: string
          project_id: string
          refresh_token: string
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string
          expires_at: string
          id?: string
          project_id: string
          refresh_token: string
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string
          expires_at?: string
          id?: string
          project_id?: string
          refresh_token?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "google_integrations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      grid_points: {
        Row: {
          business_rank: number | null
          competitor_1_name: string | null
          competitor_1_rating: number | null
          competitor_1_reviews: number | null
          competitor_2_name: string | null
          competitor_2_rating: number | null
          competitor_2_reviews: number | null
          competitor_3_name: string | null
          competitor_3_rating: number | null
          competitor_3_reviews: number | null
          created_at: string
          id: string
          in_local_pack: boolean | null
          is_from_serp: boolean | null
          latitude: number
          longitude: number
          position: number
          rank: number | null
          snapshot_id: string
        }
        Insert: {
          business_rank?: number | null
          competitor_1_name?: string | null
          competitor_1_rating?: number | null
          competitor_1_reviews?: number | null
          competitor_2_name?: string | null
          competitor_2_rating?: number | null
          competitor_2_reviews?: number | null
          competitor_3_name?: string | null
          competitor_3_rating?: number | null
          competitor_3_reviews?: number | null
          created_at?: string
          id?: string
          in_local_pack?: boolean | null
          is_from_serp?: boolean | null
          latitude: number
          longitude: number
          position: number
          rank?: number | null
          snapshot_id: string
        }
        Update: {
          business_rank?: number | null
          competitor_1_name?: string | null
          competitor_1_rating?: number | null
          competitor_1_reviews?: number | null
          competitor_2_name?: string | null
          competitor_2_rating?: number | null
          competitor_2_reviews?: number | null
          competitor_3_name?: string | null
          competitor_3_rating?: number | null
          competitor_3_reviews?: number | null
          created_at?: string
          id?: string
          in_local_pack?: boolean | null
          is_from_serp?: boolean | null
          latitude?: number
          longitude?: number
          position?: number
          rank?: number | null
          snapshot_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "grid_points_snapshot_id_fkey"
            columns: ["snapshot_id"]
            isOneToOne: false
            referencedRelation: "grid_snapshots"
            referencedColumns: ["id"]
          },
        ]
      }
      grid_snapshots: {
        Row: {
          captured_at: string
          created_at: string
          id: string
          keyword: string
          project_id: string
        }
        Insert: {
          captured_at?: string
          created_at?: string
          id?: string
          keyword: string
          project_id: string
        }
        Update: {
          captured_at?: string
          created_at?: string
          id?: string
          keyword?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "grid_snapshots_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      gsc_page_data: {
        Row: {
          clicks: number | null
          ctr: number | null
          date_range_end: string
          date_range_start: string
          id: string
          impressions: number | null
          page: string
          position: number | null
          project_id: string
          updated_at: string
        }
        Insert: {
          clicks?: number | null
          ctr?: number | null
          date_range_end: string
          date_range_start: string
          id?: string
          impressions?: number | null
          page: string
          position?: number | null
          project_id: string
          updated_at?: string
        }
        Update: {
          clicks?: number | null
          ctr?: number | null
          date_range_end?: string
          date_range_start?: string
          id?: string
          impressions?: number | null
          page?: string
          position?: number | null
          project_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gsc_page_data_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      gsc_query_daily: {
        Row: {
          clicks: number | null
          ctr: number | null
          date: string
          id: string
          impressions: number | null
          position: number | null
          project_id: string
          query: string
          updated_at: string
        }
        Insert: {
          clicks?: number | null
          ctr?: number | null
          date: string
          id?: string
          impressions?: number | null
          position?: number | null
          project_id: string
          query: string
          updated_at?: string
        }
        Update: {
          clicks?: number | null
          ctr?: number | null
          date?: string
          id?: string
          impressions?: number | null
          position?: number | null
          project_id?: string
          query?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gsc_query_daily_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      gsc_query_data: {
        Row: {
          clicks: number | null
          ctr: number | null
          date_range_end: string
          date_range_start: string
          id: string
          impressions: number | null
          position: number | null
          project_id: string
          query: string
          updated_at: string
        }
        Insert: {
          clicks?: number | null
          ctr?: number | null
          date_range_end: string
          date_range_start: string
          id?: string
          impressions?: number | null
          position?: number | null
          project_id: string
          query: string
          updated_at?: string
        }
        Update: {
          clicks?: number | null
          ctr?: number | null
          date_range_end?: string
          date_range_start?: string
          id?: string
          impressions?: number | null
          position?: number | null
          project_id?: string
          query?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gsc_query_data_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      gsc_query_page_data: {
        Row: {
          clicks: number | null
          ctr: number | null
          date_range_end: string
          date_range_start: string
          id: string
          impressions: number | null
          page: string
          position: number | null
          project_id: string
          query: string
          updated_at: string
        }
        Insert: {
          clicks?: number | null
          ctr?: number | null
          date_range_end: string
          date_range_start: string
          id?: string
          impressions?: number | null
          page: string
          position?: number | null
          project_id: string
          query: string
          updated_at?: string
        }
        Update: {
          clicks?: number | null
          ctr?: number | null
          date_range_end?: string
          date_range_start?: string
          id?: string
          impressions?: number | null
          page?: string
          position?: number | null
          project_id?: string
          query?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gsc_query_page_data_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_action_completions: {
        Row: {
          analysis_action_id: string
          completed: boolean
          completed_at: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          analysis_action_id: string
          completed?: boolean
          completed_at?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          analysis_action_id?: string
          completed?: boolean
          completed_at?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "keyword_action_completions_analysis_action_id_fkey"
            columns: ["analysis_action_id"]
            isOneToOne: false
            referencedRelation: "keyword_analysis_actions"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_action_memory: {
        Row: {
          action_context: Json | null
          action_text: string
          action_type: string
          ai_status: string | null
          completed_at: string | null
          confidence: number
          crawl_completed_at: string | null
          created_at: string
          effort_score: number | null
          explanation: string | null
          how: string | null
          id: string
          impact_score: number | null
          keyword_id: string
          outcome: string | null
          priority_score: number | null
          source: string | null
          title: string | null
          updated_at: string | null
          why: string | null
        }
        Insert: {
          action_context?: Json | null
          action_text: string
          action_type: string
          ai_status?: string | null
          completed_at?: string | null
          confidence: number
          crawl_completed_at?: string | null
          created_at?: string
          effort_score?: number | null
          explanation?: string | null
          how?: string | null
          id?: string
          impact_score?: number | null
          keyword_id: string
          outcome?: string | null
          priority_score?: number | null
          source?: string | null
          title?: string | null
          updated_at?: string | null
          why?: string | null
        }
        Update: {
          action_context?: Json | null
          action_text?: string
          action_type?: string
          ai_status?: string | null
          completed_at?: string | null
          confidence?: number
          crawl_completed_at?: string | null
          created_at?: string
          effort_score?: number | null
          explanation?: string | null
          how?: string | null
          id?: string
          impact_score?: number | null
          keyword_id?: string
          outcome?: string | null
          priority_score?: number | null
          source?: string | null
          title?: string | null
          updated_at?: string | null
          why?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "keyword_action_memory_keyword_id_fkey"
            columns: ["keyword_id"]
            isOneToOne: false
            referencedRelation: "keywords"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_analysis_actions: {
        Row: {
          analysis_run_id: string
          applies_to: string | null
          created_at: string
          description: string | null
          effort_label: string | null
          id: string
          impact_label: string | null
          priority: string | null
          step_number: number | null
          title: string | null
        }
        Insert: {
          analysis_run_id: string
          applies_to?: string | null
          created_at?: string
          description?: string | null
          effort_label?: string | null
          id?: string
          impact_label?: string | null
          priority?: string | null
          step_number?: number | null
          title?: string | null
        }
        Update: {
          analysis_run_id?: string
          applies_to?: string | null
          created_at?: string
          description?: string | null
          effort_label?: string | null
          id?: string
          impact_label?: string | null
          priority?: string | null
          step_number?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "keyword_analysis_actions_analysis_run_id_fkey"
            columns: ["analysis_run_id"]
            isOneToOne: false
            referencedRelation: "keyword_analysis_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_analysis_runs: {
        Row: {
          ai_result: Json | null
          analysis_json: Json | null
          analysis_version: number
          competitor_signals: Json | null
          created_at: string
          id: string
          keyword_id: string
          project_id: string
          rank_at_time: number | null
          serp_snapshot: Json | null
          serp_snapshot_hash: string | null
          target_rank: number | null
          user_signals: Json | null
        }
        Insert: {
          ai_result?: Json | null
          analysis_json?: Json | null
          analysis_version?: number
          competitor_signals?: Json | null
          created_at?: string
          id?: string
          keyword_id: string
          project_id: string
          rank_at_time?: number | null
          serp_snapshot?: Json | null
          serp_snapshot_hash?: string | null
          target_rank?: number | null
          user_signals?: Json | null
        }
        Update: {
          ai_result?: Json | null
          analysis_json?: Json | null
          analysis_version?: number
          competitor_signals?: Json | null
          created_at?: string
          id?: string
          keyword_id?: string
          project_id?: string
          rank_at_time?: number | null
          serp_snapshot?: Json | null
          serp_snapshot_hash?: string | null
          target_rank?: number | null
          user_signals?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "keyword_analysis_runs_keyword_id_fkey"
            columns: ["keyword_id"]
            isOneToOne: false
            referencedRelation: "keywords"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "keyword_analysis_runs_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_gsc_data: {
        Row: {
          clicks: number | null
          created_at: string
          ctr: number | null
          date_range_end: string
          date_range_start: string
          id: string
          impressions: number | null
          keyword_id: string
          position: number | null
          updated_at: string
        }
        Insert: {
          clicks?: number | null
          created_at?: string
          ctr?: number | null
          date_range_end: string
          date_range_start: string
          id?: string
          impressions?: number | null
          keyword_id: string
          position?: number | null
          updated_at?: string
        }
        Update: {
          clicks?: number | null
          created_at?: string
          ctr?: number | null
          date_range_end?: string
          date_range_start?: string
          id?: string
          impressions?: number | null
          keyword_id?: string
          position?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "keyword_gsc_data_keyword_id_fkey"
            columns: ["keyword_id"]
            isOneToOne: false
            referencedRelation: "keywords"
            referencedColumns: ["id"]
          },
        ]
      }
      keywords: {
        Row: {
          completed_actions: Json | null
          country: string | null
          created_at: string
          current_rank: number | null
          frequency: string | null
          g_vol: number | null
          id: string
          is_active: boolean | null
          keyword: string
          labels: string[] | null
          labels_system: string[] | null
          language: string | null
          last_rank_check: string | null
          location: string | null
          monitoring_only: boolean | null
          notes: string | null
          previous_week_position: number | null
          project_id: string
          ranking_url: string | null
          search_engine: string | null
          serprobot_keyword_id: number | null
          slug: string | null
          status: string | null
          tags: string[] | null
          target_url: string | null
          task_status: string | null
          tracking_status: string | null
          updated_at: string
          volume_bucket: string | null
          volume_last_checked_at: string | null
          volume_source: string | null
          volume_state: string | null
        }
        Insert: {
          completed_actions?: Json | null
          country?: string | null
          created_at?: string
          current_rank?: number | null
          frequency?: string | null
          g_vol?: number | null
          id?: string
          is_active?: boolean | null
          keyword: string
          labels?: string[] | null
          labels_system?: string[] | null
          language?: string | null
          last_rank_check?: string | null
          location?: string | null
          monitoring_only?: boolean | null
          notes?: string | null
          previous_week_position?: number | null
          project_id: string
          ranking_url?: string | null
          search_engine?: string | null
          serprobot_keyword_id?: number | null
          slug?: string | null
          status?: string | null
          tags?: string[] | null
          target_url?: string | null
          task_status?: string | null
          tracking_status?: string | null
          updated_at?: string
          volume_bucket?: string | null
          volume_last_checked_at?: string | null
          volume_source?: string | null
          volume_state?: string | null
        }
        Update: {
          completed_actions?: Json | null
          country?: string | null
          created_at?: string
          current_rank?: number | null
          frequency?: string | null
          g_vol?: number | null
          id?: string
          is_active?: boolean | null
          keyword?: string
          labels?: string[] | null
          labels_system?: string[] | null
          language?: string | null
          last_rank_check?: string | null
          location?: string | null
          monitoring_only?: boolean | null
          notes?: string | null
          previous_week_position?: number | null
          project_id?: string
          ranking_url?: string | null
          search_engine?: string | null
          serprobot_keyword_id?: number | null
          slug?: string | null
          status?: string | null
          tags?: string[] | null
          target_url?: string | null
          task_status?: string | null
          tracking_status?: string | null
          updated_at?: string
          volume_bucket?: string | null
          volume_last_checked_at?: string | null
          volume_source?: string | null
          volume_state?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "keywords_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      page_entities: {
        Row: {
          analysis_run_id: string
          competitor_rank: number | null
          entity_raw: string
          entity_type: string | null
          extracted_at: string
          id: string
          page_type: string
          page_url: string
        }
        Insert: {
          analysis_run_id: string
          competitor_rank?: number | null
          entity_raw: string
          entity_type?: string | null
          extracted_at?: string
          id?: string
          page_type: string
          page_url: string
        }
        Update: {
          analysis_run_id?: string
          competitor_rank?: number | null
          entity_raw?: string
          entity_type?: string | null
          extracted_at?: string
          id?: string
          page_type?: string
          page_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "page_entities_analysis_run_id_fkey"
            columns: ["analysis_run_id"]
            isOneToOne: false
            referencedRelation: "keyword_analysis_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          analysis_completed_at: string | null
          analysis_error: string | null
          analysis_started_at: string | null
          analysis_status: string | null
          business_name: string
          city: string | null
          country: string | null
          created_at: string
          gbp_url: string | null
          gsc_property: string | null
          id: string
          keyword_tracking_error_message: string | null
          last_crawl_trigger: string | null
          last_keyword_tracking_run_at: string | null
          last_keyword_tracking_success: boolean | null
          last_priority_action_type: string | null
          last_priority_decision: string | null
          last_priority_trigger: string | null
          last_priority_updated_at: string | null
          last_successful_run_at: string | null
          latitude: number | null
          locked_at: string | null
          locked_next_action_id: string | null
          longitude: number | null
          plan_tier: string | null
          postcode: string | null
          primary_service: string
          target_url: string | null
          tracking_frequency: string
          updated_at: string
          user_id: string
          website_url: string | null
        }
        Insert: {
          analysis_completed_at?: string | null
          analysis_error?: string | null
          analysis_started_at?: string | null
          analysis_status?: string | null
          business_name: string
          city?: string | null
          country?: string | null
          created_at?: string
          gbp_url?: string | null
          gsc_property?: string | null
          id?: string
          keyword_tracking_error_message?: string | null
          last_crawl_trigger?: string | null
          last_keyword_tracking_run_at?: string | null
          last_keyword_tracking_success?: boolean | null
          last_priority_action_type?: string | null
          last_priority_decision?: string | null
          last_priority_trigger?: string | null
          last_priority_updated_at?: string | null
          last_successful_run_at?: string | null
          latitude?: number | null
          locked_at?: string | null
          locked_next_action_id?: string | null
          longitude?: number | null
          plan_tier?: string | null
          postcode?: string | null
          primary_service: string
          target_url?: string | null
          tracking_frequency?: string
          updated_at?: string
          user_id: string
          website_url?: string | null
        }
        Update: {
          analysis_completed_at?: string | null
          analysis_error?: string | null
          analysis_started_at?: string | null
          analysis_status?: string | null
          business_name?: string
          city?: string | null
          country?: string | null
          created_at?: string
          gbp_url?: string | null
          gsc_property?: string | null
          id?: string
          keyword_tracking_error_message?: string | null
          last_crawl_trigger?: string | null
          last_keyword_tracking_run_at?: string | null
          last_keyword_tracking_success?: boolean | null
          last_priority_action_type?: string | null
          last_priority_decision?: string | null
          last_priority_trigger?: string | null
          last_priority_updated_at?: string | null
          last_successful_run_at?: string | null
          latitude?: number | null
          locked_at?: string | null
          locked_next_action_id?: string | null
          longitude?: number | null
          plan_tier?: string | null
          postcode?: string | null
          primary_service?: string
          target_url?: string | null
          tracking_frequency?: string
          updated_at?: string
          user_id?: string
          website_url?: string | null
        }
        Relationships: []
      }
      rankings: {
        Row: {
          checked_at: string
          created_at: string
          description: string | null
          id: string
          keyword_id: string
          rank: number | null
          serp_features: Json | null
          serp_results: Json | null
          title: string | null
          url: string | null
        }
        Insert: {
          checked_at?: string
          created_at?: string
          description?: string | null
          id?: string
          keyword_id: string
          rank?: number | null
          serp_features?: Json | null
          serp_results?: Json | null
          title?: string | null
          url?: string | null
        }
        Update: {
          checked_at?: string
          created_at?: string
          description?: string | null
          id?: string
          keyword_id?: string
          rank?: number | null
          serp_features?: Json | null
          serp_results?: Json | null
          title?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rankings_keyword_id_fkey"
            columns: ["keyword_id"]
            isOneToOne: false
            referencedRelation: "keywords"
            referencedColumns: ["id"]
          },
        ]
      }
      run_entities: {
        Row: {
          analysis_run_id: string
          created_at: string
          entity_norm: string
          entity_type: string | null
          id: string
          source_page_entity_ids: string[] | null
        }
        Insert: {
          analysis_run_id: string
          created_at?: string
          entity_norm: string
          entity_type?: string | null
          id?: string
          source_page_entity_ids?: string[] | null
        }
        Update: {
          analysis_run_id?: string
          created_at?: string
          entity_norm?: string
          entity_type?: string | null
          id?: string
          source_page_entity_ids?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "run_entities_analysis_run_id_fkey"
            columns: ["analysis_run_id"]
            isOneToOne: false
            referencedRelation: "keyword_analysis_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      saved_filters: {
        Row: {
          created_at: string
          filter_json: Json
          id: string
          name: string
          project_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          filter_json?: Json
          id?: string
          name: string
          project_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          filter_json?: Json
          id?: string
          name?: string
          project_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_filters_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      seo_priority_cache: {
        Row: {
          ai_visibility_run_id: string | null
          analysis_run_id: string | null
          created_at: string
          expected_outcome: string[]
          has_ai_signal: boolean
          id: string
          keyword_id: string | null
          priority_summary: string
          project_id: string
          updated_at: string
          what_to_do: string[]
          why_this_matters: string[]
        }
        Insert: {
          ai_visibility_run_id?: string | null
          analysis_run_id?: string | null
          created_at?: string
          expected_outcome: string[]
          has_ai_signal?: boolean
          id?: string
          keyword_id?: string | null
          priority_summary: string
          project_id: string
          updated_at?: string
          what_to_do: string[]
          why_this_matters: string[]
        }
        Update: {
          ai_visibility_run_id?: string | null
          analysis_run_id?: string | null
          created_at?: string
          expected_outcome?: string[]
          has_ai_signal?: boolean
          id?: string
          keyword_id?: string | null
          priority_summary?: string
          project_id?: string
          updated_at?: string
          what_to_do?: string[]
          why_this_matters?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "seo_priority_cache_analysis_run_id_fkey"
            columns: ["analysis_run_id"]
            isOneToOne: false
            referencedRelation: "keyword_analysis_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "seo_priority_cache_keyword_id_fkey"
            columns: ["keyword_id"]
            isOneToOne: false
            referencedRelation: "keywords"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "seo_priority_cache_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: true
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      share_tokens: {
        Row: {
          created_at: string
          created_by: string
          id: string
          project_id: string
          token: string
        }
        Insert: {
          created_at?: string
          created_by: string
          id?: string
          project_id: string
          token: string
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          project_id?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "share_tokens_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      site_audits: {
        Row: {
          completed_at: string | null
          created_at: string
          domain: string
          error_message: string | null
          id: string
          project_id: string
          started_at: string
          status: string
          total_pages_classified: number | null
          total_pages_discovered: number | null
          updated_at: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          domain: string
          error_message?: string | null
          id?: string
          project_id: string
          started_at?: string
          status: string
          total_pages_classified?: number | null
          total_pages_discovered?: number | null
          updated_at?: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          domain?: string
          error_message?: string | null
          id?: string
          project_id?: string
          started_at?: string
          status?: string
          total_pages_classified?: number | null
          total_pages_discovered?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "site_audits_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      site_signals: {
        Row: {
          body_text_sample: string | null
          crawled_at: string | null
          created_at: string
          h1_text: string | null
          has_location_pages: boolean | null
          has_nap: boolean | null
          has_service_pages: boolean | null
          id: string
          location_mentions: number | null
          project_id: string
          service_mentions: number | null
          title_tag: string | null
        }
        Insert: {
          body_text_sample?: string | null
          crawled_at?: string | null
          created_at?: string
          h1_text?: string | null
          has_location_pages?: boolean | null
          has_nap?: boolean | null
          has_service_pages?: boolean | null
          id?: string
          location_mentions?: number | null
          project_id: string
          service_mentions?: number | null
          title_tag?: string | null
        }
        Update: {
          body_text_sample?: string | null
          crawled_at?: string | null
          created_at?: string
          h1_text?: string | null
          has_location_pages?: boolean | null
          has_nap?: boolean | null
          has_service_pages?: boolean | null
          id?: string
          location_mentions?: number | null
          project_id?: string
          service_mentions?: number | null
          title_tag?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "site_signals_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      weekly_actions: {
        Row: {
          action_text: string
          based_on_serp: boolean | null
          competitor_reference: string | null
          completed_at: string | null
          created_at: string
          grid_point_ids: string[] | null
          id: string
          is_completed: boolean | null
          period_end: string | null
          period_start: string | null
          priority: number | null
          project_id: string
          result_notes: string | null
          status: string | null
          suggested_copy: string | null
          week_of: string
          why_it_matters: string | null
        }
        Insert: {
          action_text: string
          based_on_serp?: boolean | null
          competitor_reference?: string | null
          completed_at?: string | null
          created_at?: string
          grid_point_ids?: string[] | null
          id?: string
          is_completed?: boolean | null
          period_end?: string | null
          period_start?: string | null
          priority?: number | null
          project_id: string
          result_notes?: string | null
          status?: string | null
          suggested_copy?: string | null
          week_of?: string
          why_it_matters?: string | null
        }
        Update: {
          action_text?: string
          based_on_serp?: boolean | null
          competitor_reference?: string | null
          completed_at?: string | null
          created_at?: string
          grid_point_ids?: string[] | null
          id?: string
          is_completed?: boolean | null
          period_end?: string | null
          period_start?: string | null
          priority?: number | null
          project_id?: string
          result_notes?: string | null
          status?: string | null
          suggested_copy?: string | null
          week_of?: string
          why_it_matters?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "weekly_actions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      compute_internal_links_in: {
        Args: { target_project_id: string; target_url: string }
        Returns: string[]
      }
      update_project_internal_links: {
        Args: { target_project_id: string }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
