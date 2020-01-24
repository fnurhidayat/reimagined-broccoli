const ActiveRecord = require('./index');

class Post extends ActiveRecord {
<<<<<<< HEAD
  static table_name = 'posts';

  constructor(data) {
    super({
      data: data,
    });
  }
=======
    constructor(data) {
        super({
            table_name: 'posts',
            data:data
        })
    }
>>>>>>> 31315de68db1c860682a15c89d056fec01613727
}

module.exports = Post;
