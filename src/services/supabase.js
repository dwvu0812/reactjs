import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ccuirahmqevbhdxhqcdg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjdWlyYWhtcWV2YmhkeGhxY2RnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MTA4Mjg1OCwiZXhwIjoyMDA2NjU4ODU4fQ.v2sRH8KwPlL1BLCQnpgUXfuvmliGsCUuLlRoVyyVVnY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
