var create = require('./create.js');
var args = process.argv.slice(2);
const method = args[0]

switch(method) {
  case 'create_users':
    const [ name, email, password, password_confirmation ] = args.slice(1);

    create({ name, email, password, password_confirmation });
    break;
  default:
    console.log('Unknown operation!')
}
