export interface MigrateExecutorSchema {
  supabaseDirectory: string;
  target?: 'local' | 'remote';
  yes?: boolean;
}
