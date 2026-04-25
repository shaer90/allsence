const router = require('express').Router();
const dbMod = require('../db');
const { authMiddleware } = require('../middleware/auth');

// POST /api/orders
router.post('/', authMiddleware, (req, res) => {
  const { items, totalPrice, address, paymentMethod, notes, fullName, phone } = req.body || {};
  if (!items || !Array.isArray(items) || items.length === 0)
    return res.status(400).json({ message: 'لا توجد منتجات في الطلب' });

  const db = dbMod.db;
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.userId);
  if (!user) return res.status(401).json({ message: 'غير مصرح' });

  const orderId = `ORD-${Date.now().toString().slice(-8).toUpperCase()}`;
  const createdAt = new Date().toISOString();

  db.prepare(`INSERT INTO orders (id,user_id,user_name,user_phone,status,total_price,address,payment_method,notes,created_at) VALUES (?,?,?,?,'pending',?,?,?,?,?)`)
    .run(orderId, user.id, fullName || user.name, phone || user.phone, totalPrice, address, paymentMethod, notes || null, createdAt);

  const insItem = db.prepare(`INSERT INTO order_items (id,order_id,product_id,product_name,product_name_ar,price,quantity,color) VALUES (?,?,?,?,?,?,?,?)`);
  for (const item of items) {
    insItem.run(`item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, orderId, item.id, item.name, item.nameAr, item.price, item.quantity, item.color);
  }

  const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(orderId);
  res.json({ order: dbMod.formatOrder(order) });
});

// GET /api/orders/my
router.get('/my', authMiddleware, (req, res) => {
  const rows = dbMod.db.prepare('SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC').all(req.user.userId);
  res.json({ orders: rows.map(dbMod.formatOrder) });
});

// PUT /api/orders/:id/cancel
router.put('/:id/cancel', authMiddleware, (req, res) => {
  const db = dbMod.db;
  const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(req.params.id);
  if (!order) return res.status(404).json({ message: 'الطلب غير موجود' });
  if (order.user_id !== req.user.userId) return res.status(403).json({ message: 'غير مصرح' });
  if (order.status !== 'pending') return res.status(400).json({ message: 'لا يمكن إلغاء هذا الطلب' });

  db.prepare("UPDATE orders SET status = 'cancelled', cancelled_by = 'user' WHERE id = ?").run(order.id);
  res.json({ success: true });
});

module.exports = router;
