import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vngyksyisjutleqeismq.supabase.co';
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuZ3lrc3lpc2p1dGxlcWVpc21xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NDcyNTgsImV4cCI6MjAwNzMyMzI1OH0.HZriyKQvj6mBvt47yujROfzKNuk5YbuDfWGCGujEiW0';


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
