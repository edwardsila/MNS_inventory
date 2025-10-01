const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DeviceMovement = sequelize.define('DeviceMovement', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    device_id: { type: DataTypes.INTEGER, allowNull: false },
    action: { type: DataTypes.STRING, allowNull: false },
    from_location: { type: DataTypes.STRING },
    to_location: { type: DataTypes.STRING },
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    received_by: { type: DataTypes.INTEGER },
    confirmed_arrival: { type: DataTypes.BOOLEAN, defaultValue: false },
    notes: { type: DataTypes.TEXT }
  }, {
    tableName: 'device_movements',
    timestamps: false
  });
  return DeviceMovement;
};