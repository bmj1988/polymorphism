'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserProfile.hasMany(models.Image, {foreignKey:'imageableId'})
    }
  };
  UserProfile.init({
    displayName: DataTypes.STRING,
    birthMonth: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};
