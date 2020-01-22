var create = require('./create.js');
var update = require('./update.js');
var args = process.argv.slice(2);
const method = args[0]

switch(method) {
  case 'create_users':
    const [ name, email, password, password_confirmation ] = args.slice(1);
    create.user({ name, email, password, password_confirmation })
      .then(data => console.log(data))
      .catch(err => console.error(err))
    break;
  case 'update_users':
    let id = args[1];
    let obj = JSON.parse(args[2]);
    update(id,obj);
    break;
  case 'create_posts':
    const [ title, body ] = args.slice(1)
    create.post({ title, body })
      .then(data => console.log(data))
      .catch(err => console.error(err))
    break;
  default:
    console.log('Unknown operation!')
}
