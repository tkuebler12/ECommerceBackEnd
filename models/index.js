const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  through: {
    model: Product,
    unique: false
  },

  as: `product_id`

});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },

  as: `product_tag`
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
