const sequelize = require('../config/sequelize');
const Device = require('./device')(sequelize);
const User = require('./user')(sequelize);
const DeviceMovement = require('./deviceMovement')(sequelize);
const MaintenanceLog = require('./maintenanceLog')(sequelize);

// Associations
DeviceMovement.belongsTo(Device, { foreignKey: 'device_id' });
DeviceMovement.belongsTo(User, { foreignKey: 'received_by' });
MaintenanceLog.belongsTo(Device, { foreignKey: 'device_id' });
MaintenanceLog.belongsTo(User, { foreignKey: 'performed_by' });

module.exports = {
  sequelize,
  Device,
  User,
  DeviceMovement,
  MaintenanceLog,
};