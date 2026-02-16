import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define a TypeScript interface for configuration
interface Config {
  SMTP_HOST: string;
  SMTP_PORT: string;
  SMTP_SECURE: string;
  SMTP_USER: string;
  SMTP_PASS: string;
  NEXT_PUBLIC_JOTFORM_UPLOAD: string;
  JOTFORM_URL_TAXPRO_INCUBATOR: string;
  JOTFORM_URL_TAXPRO_ACCELERATOR: string;
  JOTFORM_URL_SERVICE_BUREAU: string;
  STRIPE_PUBLISHABLE_KEY: string;
  STRIPE_SECRET_KEY?: string;
  SUPABASE_USER_ID?: string;
  NEXT_PUBLIC_SUPABASE_URL: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
  CALENDLY_URL: string;
  CALENDLY_URL_JOSE: string;
  OPENAI_API_KEY: string;
  OPENAI_ASSISTANT_ID: string;
}

// Safely assign environment variables to config
const config: Config = {
  SMTP_HOST: process.env.SMTP_HOST!,
  SMTP_PORT: process.env.SMTP_PORT!,
  SMTP_SECURE: process.env.SMTP_SECURE!,
  SMTP_USER: process.env.SMTP_USER!,
  SMTP_PASS: process.env.SMTP_PASS!,
  NEXT_PUBLIC_JOTFORM_UPLOAD: process.env.NEXT_PUBLIC_JOTFORM_UPLOAD!,
  JOTFORM_URL_TAXPRO_INCUBATOR:
    process.env.NEXT_PUBLIC_JOTFORM_URL_TAXPRO_INCUBATOR!,
  JOTFORM_URL_TAXPRO_ACCELERATOR:
    process.env.NEXT_PUBLIC_JOTFORM_URL_TAXPRO_ACCELERATOR!,
  JOTFORM_URL_SERVICE_BUREAU:
    process.env.NEXT_PUBLIC_JOTFORM_URL_SERVICE_BUREAU!,
  STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  SUPABASE_USER_ID: process.env.SUPABASE_USER_ID,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL!,
  CALENDLY_URL_JOSE: process.env.NEXT_PUBLIC_CALENDLY_URL_JOSE!,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY!,
  OPENAI_ASSISTANT_ID: process.env.OPENAI_ASSISTANT_ID!,
};

export default config;
