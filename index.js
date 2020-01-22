var create = require('./create.js');
var updateUser = require('./update.js').user;
var deleteUser = require('./delete.js').user;
var updatePost = require('./update.js').post;
var deletePost = require('./delete.js').post;
var args = process.argv.slice(2);
const method = args[0]

switch(method) {
  case 'create_users':
    const [ name, email, password, password_confirmation ] = args.slice(1);
    create({ name, email, password, password_confirmation });
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
  default:
    console.log('Unknown operation!')
}