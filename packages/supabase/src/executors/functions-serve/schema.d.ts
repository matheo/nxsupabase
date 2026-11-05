export interface FunctionsServeExecutorSchema {
  supabaseDirectory: string;
  noVerifyJwt?: boolean;
  envFile?: string;
  debug?: boolean;
}
