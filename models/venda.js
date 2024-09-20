'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Venda.belongsTo(models.Cliente,
        {foreignKey: 'ClienteId',}
      );

      Venda.belongsTo(models.Vendedor,
        {foreignKey: 'VendedorId',}
      );

      Venda.belongsTo(models.Produto,
        {foreignKey: 'ProdutoId',}
      );

      Venda.belongsTo(models.Item,
        {foreignKey: 'VendaId',}
      );
    } 
  }
  Venda.init({
    date: DataTypes.DATE,
    ClienteId: DataTypes.INTEGER,
    Vendedor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Venda',
  });
  return Venda;
};