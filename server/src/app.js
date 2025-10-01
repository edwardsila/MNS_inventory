require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const deviceRoutes = require('./routes/deviceRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/devices', deviceRoutes);

// Health check
app.get('/', (req, res) => res.send('MNS Inventory API running'));

// Sync DB and start server
const PORT = process.env.PORT || 4000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
