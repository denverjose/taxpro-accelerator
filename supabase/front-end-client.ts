
import { createClient } from '@supabase/supabase-js';
import config from '@/env-config';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const clientSupabase = createClient(supabaseUrl, supabaseKey);

