var fs = require('fs');
var users = require('./data/users.json');

const schema = {
  id: 'number',
  name: 'string',
  email: 'string',
  password: 'string',
}

const createUser = (obj) => {
  // Simple validation
  if (obj.password !== obj.password_confirmation) {
    console.log('Password and it\'s confirmation isn\'t match');
    return
  }

  let newUser = {};
  newUser.id = users.length + 1;

  for (key in obj) {
    if (Object.keys(schema).includes(key)) {
      newUser[key] = obj[key]
    }
  }

  users.push(newUser);
  fs.writeFileSync(
    `./data/users.json`,
    JSON.stringify(users, null, ' ')
  );

  console.log('Succesffully created data')
}

module.exports = createUser
