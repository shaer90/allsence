const router = require('express').Router();
const dbMod = require('../db');
const { authMiddleware } = require('../middleware/auth');

function fmt(i) {
  return {
    id: i.product_id, name: i.product_name, nameAr: i.product_name_ar,
    price: i.price, count: i.item_count, color: i.color, quantity: i.quantity,
  };
}

// GET /api/cart
router.get('/', authMiddleware, (req, res) => {
  const rows = dbMod.db.prepare('SELECT * FROM cart_items WHERE user_id = ?').all(req.user.userId);
  res.json({ items: rows.map(fmt) });
});

// PUT /api/cart — full replace
router.put('/', authMiddleware, (req, res) => {
  const { items } = req.body || {};
  if (!Array.isArray(items)) return res.status(400).json({ message: 'items required' });
  const db = dbMod.db;
  db.prepare('DELETE FROM cart_items WHERE user_id = ?').run(req.user.userId);
  const ins = db.prepare(`INSERT OR REPLACE INTO cart_items (id,user_id,product_id,product_name,product_name_ar,price,item_count,color,quantity) VALUES (?,?,?,?,?,?,?,?,?)`);
  for (const item of items) {
    ins.run(`cart-${req.user.userId}-${item.id}`, req.user.userId, item.id, item.name, item.nameAr, item.price, item.count, item.color, item.quantity);
  }
  res.json({ success: true });
});

// DELETE /api/cart
router.delete('/', authMiddleware, (req, res) => {
  dbMod.db.prepare('DELETE FROM cart_items WHERE user_id = ?').run(req.user.userId);
  res.json({ success: true });
});

module.exports = router;
