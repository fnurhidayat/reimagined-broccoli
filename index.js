var create = require('./create.js');
var update = require('./update.js');
var args = process.argv.slice(2);
const method = args[0]

switch(method) {
  case 'create_users':
    const [ name, email, password, password_confirmation ] = args.slice(1);
    create({ name, email, password, password_confirmation });
    break;
  case 'update_users':
    const id = args[0];
    const obj = args[1];
    update(id,obj);
    break;
  default:
    console.log('Unknown operation!')
}
