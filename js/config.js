// Estes valores são públicos por natureza (a chave "anon" do Supabase
// é feita para ser usada no browser). A proteção real está nas
// políticas RLS definidas em supabase/schema.sql (só permitem INSERT).
//
// Substitui pelos valores do teu projeto Supabase:
// Project Settings -> API -> Project URL / anon public key
export const SUPABASE_URL = "https://YOUR-PROJECT-REF.supabase.co";
export const SUPABASE_ANON_KEY = "YOUR-ANON-PUBLIC-KEY";
