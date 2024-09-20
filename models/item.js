'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.hasMany(models.Venda, 
        {foreignKey: 'VendaId',}
      );
      Item.belongsTo(models.Produto,
        {foreignKey: 'ProdutoId',}
      );
    }
  }
  Item.init({
    VendaId: DataTypes.INTEGER,
    ProdutoId: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};