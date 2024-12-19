import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ixpxjsasoontxdtxiosj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4cHhqc2Fzb29udHhkdHhpb3NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0ODE5NzAsImV4cCI6MjA0NzA1Nzk3MH0.2URucOgUosmFtfpwn2CJ_P4AKbV-_I2SVe2t4YsJVW0';

export const supabase = createClient(supabaseUrl, supabaseKey);


