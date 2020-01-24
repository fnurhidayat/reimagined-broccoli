<<<<<<< HEAD
var ActiveRecord = require('./index');

class User extends ActiveRecord {
  static table_name = 'users';

  constructor(data) {
    super(data);
    this.password = data.password
    this.password_confirmation = data.password_confirmation
  }

  save() {
    // validate
    return new Promise((resolve, reject) => {
      if (this.password !== this.password_confirmation) {
        reject('Your password doesn\'t match')
      }

      delete this.password_confirmation
      super.save()
        .then(data => resolve(data));
    })

=======
const ActiveRecord = require('./index.js');

class User extends ActiveRecord{
  constructor(data) {
    super({
      table_name: 'users',
      data: data
    })
>>>>>>> 31315de68db1c860682a15c89d056fec01613727
  }
}

module.exports = User;
