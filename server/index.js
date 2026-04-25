const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { initDB } = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json({ limit: '20mb' }));

app.use('/api/auth',          require('./routes/auth'));
app.use('/api/cart',          require('./routes/cart'));
app.use('/api/products',      require('./routes/products'));
app.use('/api/orders',        require('./routes/orders'));
app.use('/api/network',       require('./routes/network'));
app.use('/api/admin',         require('./routes/admin'));
app.use('/api/verifications', require('./routes/verifications'));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Allsence server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('DB init failed:', err);
  process.exit(1);
});
