const router = require('express').Router();
const dbMod = require('../db');
const { authMiddleware } = require('../middleware/auth');

function formatCommission(c) {
  return {
    id: c.id, orderId: c.order_id, productNames: c.product_names,
    orderTotal: c.order_total, rate: c.rate, amount: c.amount,
    type: c.type, level: c.level,
    memberId: c.member_id, memberName: c.member_name,
    fromMemberId: c.from_member_id, fromMemberName: c.from_member_name,
    createdAt: c.created_at,
  };
}

function formatPayment(p) {
  return {
    id: p.id, memberId: p.member_id, memberName: p.member_name,
    amount: p.amount, note: p.note, paidAt: p.paid_at, paidBy: p.paid_by,
  };
}

function formatRates(r) {
  return { memberSelf: r.member_self, level1: r.level1, level2: r.level2, level3: r.level3, level4: r.level4, level5: r.level5 };
}

// GET /api/network/team
router.get('/team', authMiddleware, (req, res) => {
  const db = dbMod.db;
  const me = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.userId);
  if (!me?.subscriber_code) return res.json({ levels: [] });

  const levels = [];
  let currentCodes = [me.subscriber_code];

  for (let lvl = 1; lvl <= 5; lvl++) {
    if (!currentCodes.length) break;
    const ph = currentCodes.map(() => '?').join(',');
    const lvlMembers = db.prepare(`SELECT id,name,username,created_at FROM users WHERE sponsor_code IN (${ph})`).all(...currentCodes);
    levels.push({
      level: lvl,
      members: lvlMembers.map((m) => ({ _id: m.id, name: m.name, username: m.username, createdAt: m.created_at })),
    });
    currentCodes = db.prepare(`SELECT subscriber_code FROM users WHERE sponsor_code IN (${ph})`).all(...currentCodes).map((r) => r.subscriber_code).filter(Boolean);
  }
  res.json({ levels });
});

// GET /api/network/commissions
router.get('/commissions', authMiddleware, (req, res) => {
  const rows = dbMod.db.prepare('SELECT * FROM commissions WHERE member_id = ? ORDER BY created_at DESC').all(req.user.userId);
  res.json({ commissions: rows.map(formatCommission) });
});

// GET /api/network/payments
router.get('/payments', authMiddleware, (req, res) => {
  const rows = dbMod.db.prepare('SELECT * FROM payments WHERE member_id = ? ORDER BY paid_at DESC').all(req.user.userId);
  res.json({ payments: rows.map(formatPayment) });
});

// GET /api/network/commission-rates
router.get('/commission-rates', authMiddleware, (req, res) => {
  const row = dbMod.db.prepare('SELECT * FROM commission_rates WHERE id = 1').get();
  res.json({ rates: formatRates(row) });
});

module.exports = router;
module.exports.formatCommission = formatCommission;
module.exports.formatPayment = formatPayment;
module.exports.formatRates = formatRates;
