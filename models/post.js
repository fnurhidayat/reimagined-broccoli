const ActiveRecord = require('./index');

class Post extends ActiveRecord {
  static table_name = 'posts';

  constructor(data) {
    super(data);
  }
}

module.exports = Post;
