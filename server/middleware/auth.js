const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'allsence-jwt-secret-dev-2024';

function authMiddleware(req, res, next) {
  // Cookie first, then Authorization header fallback
  let token = req.cookies?.allsence_token;
  if (!token) {
    const auth = req.headers.authorization;
    if (auth && auth.startsWith('Bearer ')) token = auth.slice(7);
  }
  if (!token) return res.status(401).json({ message: 'غير مصرح' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: 'الجلسة منتهية، يرجى تسجيل الدخول مجدداً' });
  }
}

function adminOnly(req, res, next) {
  if (req.user?.role !== 'super_admin' && req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'غير مصرح لك بهذا الإجراء' });
  }
  next();
}

module.exports = { authMiddleware, adminOnly, JWT_SECRET };
