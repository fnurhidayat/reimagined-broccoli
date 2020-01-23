var create = require('./libs/create.js');
var User = require('./models/user');
var updateUser = require('./libs/update.js').user;
var deleteUser = require('./libs/delete.js').user;
var updatePost = require('./libs/update.js').post;
var deletePost = require('./libs/delete.js').post;
var read = require('./libs/read.js');
var args = process.argv.slice(2);
const method = args[0]

switch(method) {
  case 'create_users':
    const [ name, email, password, password_confirmation ] = args.slice(1);
    const user = new User({
      name: "afdallah",
      email: "afdallah.war@gmail.com",
      password: "satu"
    })

    user.create()
      .then(data => console.log(data))
      .catch(err => console.error(err))
    break;
  case 'update_users':
    let id_updateUser = args[1];
    let objUser = JSON.parse(args[2]);
    updateUser(id_updateUser ,objUser).then(data=>{
      console.log(data);
    });
    break;
  case 'delete_users':
    let id_deleteUser = args[1];
    deleteUser(id_deleteUser).then(data=>{
      console.log(data);
    });
    break;
  case 'update_post':
    let id_updatePost = args[1];
    let objPost = JSON.parse(args[2]);
    updatePost(id_updatePost ,objPost).then(data=>{
      console.log(data);
    });
    break;
  case 'delete_post':
    let id_deletePost = args[1];
    deletePost(id_deletePost).then(data=>{
      console.log(data);
    });
    break;
  case 'read_user':
    read(args.slice(1)[0])
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