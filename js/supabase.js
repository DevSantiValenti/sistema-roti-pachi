// js/supabase.js

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
    "https://wlvjzdfnclaejezbduuv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indsdmp6ZGZuY2xhZWplemJkdXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwOTkwNjksImV4cCI6MjA4NjY3NTA2OX0.hUh0fleq-5Q0APjzGIy7Kwm-oIDuXxtL8p_BrI42xbQ"
);

