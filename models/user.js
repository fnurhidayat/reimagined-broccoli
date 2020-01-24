var ActiveRecord = require('./index');

class User extends ActiveRecord {
  static table_name = 'users';
  #isPasswordConfirmed = () => {
    return this.password === this.password_confirmation
  }

  constructor(data) {
    super(data);
    this.password = data.password
    this.password_confirmation = data.password_confirmation
  }

  save() {
    return new Promise((resolve, reject) => {
      if (!this.#isPasswordConfirmed()) reject('Your password doesn\'t match');

      delete this.password_confirmation
      super.save()
        .then(data => resolve(data));
    })

  }
}

module.exports = User;
