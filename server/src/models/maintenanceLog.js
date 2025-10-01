const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const MaintenanceLog = sequelize.define('MaintenanceLog', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    device_id: { type: DataTypes.INTEGER, allowNull: false },
    performed_by: { type: DataTypes.INTEGER },
    action: { type: DataTypes.STRING, allowNull: false },
    status_after: { type: DataTypes.STRING },
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    notes: { type: DataTypes.TEXT }
  }, {
    tableName: 'maintenance_logs',
    timestamps: false
  });
  return MaintenanceLog;
};