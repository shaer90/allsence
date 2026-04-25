const router = require('express').Router();
const dbMod = require('../db');

router.get('/', (_req, res) => {
  const rows = dbMod.db.prepare('SELECT * FROM products').all();
  res.json({ products: rows.map(dbMod.formatProduct) });
});

router.get('/:id', (req, res) => {
  const row = dbMod.db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ product: null });
  res.json({ product: dbMod.formatProduct(row) });
});

module.exports = router;
