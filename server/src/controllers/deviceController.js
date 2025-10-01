const { Device } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const devices = await Device.findAll();
      res.json(devices);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const device = await Device.findByPk(req.params.id);
      if (!device) return res.status(404).json({ error: 'Device not found' });
      res.json(device);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const device = await Device.create(req.body);
      res.status(201).json(device);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const device = await Device.findByPk(req.params.id);
      if (!device) return res.status(404).json({ error: 'Device not found' });
      await device.update(req.body);
      res.json(device);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const device = await Device.findByPk(req.params.id);
      if (!device) return res.status(404).json({ error: 'Device not found' });
      await device.destroy();
      res.json({ message: 'Device deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};