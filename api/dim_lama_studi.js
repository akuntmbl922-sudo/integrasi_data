import { tables } from '../lib/tables.js';
import { handleCrud } from '../lib/crud.js';

export default function handler(req, res) {
  return handleCrud(req, res, tables.dim_lama_studi);
}
