const ActiveRecord = require('./index');

class Product extends ActiveRecord {
  static table_name = 'products';

  constructor(data) {
    super(data);
  }
}

module.exports = Product;
