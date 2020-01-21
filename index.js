var create = require('./create.js');
var update = require('./update.js');
var read = require('./read.js');
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
    update(id,obj);
    break;
  case 'read_user':
    read(args.slice(1)[0])
    break;
  default:
    console.log('Unknown operation!')
}
