import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://faknelkaspuoidnqvqjz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZha25lbGthc3B1b2lkbnF2cWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5MjMzMzcsImV4cCI6MjA0OTQ5OTMzN30.zDuroQ1Lg7h-v0-q5dqwkLHc-1jLjh2SVpNZgMaTA0k';

export const supabase = createClient(supabaseUrl, supabaseKey);
