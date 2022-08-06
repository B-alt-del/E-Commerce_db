// import important parts of sequelize library
const { Model, DataTypes, NUMERIC } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const ProductTag = require('./ProductTag');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true //not sure if this works
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 10,
      validate: {
        isNumeric: true //again not sure if this is right
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    // tagIds: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: ProductTag,
    //     key: 'id'
    //   }
    // }
    //maybe add category_id that references the Category models id
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
