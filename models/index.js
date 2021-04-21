const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {

  foreignKey: "category_id"
  // through: {
  //   // model: Product,
  //   // unique: false,
  // },
  // as: `product_id`

});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: 
    ProductTag,
    foreignKey: "product_id"
  //  { model: ProductTag,
  //   unique: false
  // },
  // as: `product_tag`
});

Category.hasMany(Product, {

  foreignKey: "category_id"

});

Tag.belongsToMany(Product, {

  through:
    ProductTag,
    foreignKey: "tag_id"

});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
