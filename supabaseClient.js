// Muat koneksi Supabase
const SUPABASE_URL = "https://vkhfrfkbonzzydwcmrcka.supabase.co";
const SUPABASE_ANON_KEY = "PASTE_ANON_PUBLIC_KEY_DARI_SUPABASE";

window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
