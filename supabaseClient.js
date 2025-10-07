// Inisialisasi koneksi Supabase (pastikan hanya ada file ini sekali saja)
const SUPABASE_URL = "https://vkhrfrkbonzzydwcmrcka.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZraGZya2Jvbnp6eWR3Y21yY2thIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4Mjg4MjksImV4cCI6MjA3NTQwNDgyOX0.NHV21GAv9cNBgxMAiZ8gs21v7hLLhLTCL3tTBWqbrXE";

window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
