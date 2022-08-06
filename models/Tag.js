


const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const ProductTag = require('./ProductTag'); //added


class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    },
    // productTag_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: ProductTag,
    //     key: 'id'
    //   }
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
