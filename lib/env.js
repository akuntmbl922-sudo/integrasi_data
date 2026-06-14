import fs from 'node:fs';
import path from 'node:path';

function parseEnvFile(content) {
  const result = {};
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const idx = line.indexOf('=');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    result[key] = value;
  }
  return result;
}

const envPath = path.join(process.cwd(), '.env');
let fileEnv = {};

if (fs.existsSync(envPath)) {
  fileEnv = parseEnvFile(fs.readFileSync(envPath, 'utf8'));
}

export function env(name, fallback = '') {
  const value = process.env[name] ?? fileEnv[name];
  return value === undefined || value === '' ? fallback : value;
}

export function envBool(name, fallback = false) {
  const value = process.env[name] ?? fileEnv[name];
  if (value === undefined || value === '') return fallback;
  return ['1', 'true', 'yes', 'on'].includes(String(value).toLowerCase());
}

