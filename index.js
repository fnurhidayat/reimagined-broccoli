var create = require('./create.js');
var args = process.argv.slice(2);
const [ method, name, email, password, password_confirmation ] = args;

switch(method) {
  case 'create_users':
    create({ name, email, password, password_confirmation });
    break;
  default:
    console.log('Unknown operation!')
}
