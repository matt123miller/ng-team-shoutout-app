import { z } from 'zod';

const envVariables = z.object({
  PORT: z.string().default('3333'),
  DATABASE_URL: z.string(),
  CUSTOM_STUFF: z.string(),
});

envVariables.parse(process.env);

declare global {}

declare global {
  namespace NodeJS {
    type ProcessEnv = z.infer<typeof envVariables>;
  }
}
