import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv"
dotenv.config()

const supabaseurl = prosses.env.supabase_url
const supabasekey = prosses.env.api_key
export const supabase = createClient(supabaseurl,supabasekey)