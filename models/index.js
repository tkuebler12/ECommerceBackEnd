const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  through: {
    model: Category,
    unique: false
  },

  as: `product_id`

});
// Categories have many Products

Category.belongsToMany(Product, {
  through: {
    model: Product,
    unique: false
  },
  
  as: `category_product`
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: {
    model: Tag,
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
