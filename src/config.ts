import * as dotenv from 'dotenv';
dotenv.config();

export const DEBUG = process.env.DEBUG ? Boolean(process.env.DEBUG) : false;

export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;

export const HUBSPOT_API_KEY = process.env.HAPIKEY;
export const HURL = process.env.HURL || 'https://api.hubapi.com';
