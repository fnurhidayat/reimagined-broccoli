var create = require('./create.js');
var updateUser = require('./update.js').user;
var deleteUser = require('./delete.js').user;

var args = process.argv.slice(2);
const method = args[0]

switch(method) {
  case 'create_users':
    const [ name, email, password, password_confirmation ] = args.slice(1);
    create({ name, email, password, password_confirmation });
    break;
  case 'update_users':
    let id = args[1];
    let obj = JSON.parse(args[2]);
    updateUser(id,obj);
    break;
  case 'delete_users':
    let id_delete = args[1];
    deleteUser(id_delete);  
    break;
  default:
    console.log('Unknown operation!')
}
