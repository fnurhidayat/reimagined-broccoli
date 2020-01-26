const User = require('./models/user');
const Post = require('./models/post');
const args = process.argv.slice(2);
const method = args[0];

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// CREATE
app.post('/users', async function(req, res) {
  try {
    const data = await new User(req.body).save()

    res
      .status(201)
      .json({
        status: true,
        data
      });
  } catch (err) {
    res
      .status(400)
      .json({
        status: false,
        error: err
      })
  }
});

app.post('/posts', async function(req, res) {
  try {
    const data = await new Post(req.body).save()

    res
      .status(201)
      .json({
        status: true,
        data
      });
  } catch (err) {
    res
      .status(400)
      .json({
        status: false,
        error: err
      })
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

// switch (method) {
//   case 'create_users':
//     const [name, email, password, password_confirmation] = args.slice(1);
//     const user = new User({
//       name,
//       email,
//       password,
//       password_confirmation,
//     });

//     user
//       .save()
//       .then(data => console.log(data))
//       .catch(err => console.error(err));

//       // user
//       // .create()
//       // .then(data => console.log(data))
//       // .catch(err => console.error(err));
//         break;
//     case 'update_users':
//         let id_updateUser = args[1];
//         let objUser = JSON.parse(args[2]);
//         const user_update = new User(objUser);
//         user_update.update(id_updateUser).then(data=>{
//             console.log(data);
//         });
//         break;
//     case "delete_users":
//         let id_deleteUser = args[1];
//         const user_delete = new User();
//         user_delete.delete(id_deleteUser).then(data => {
//             console.log(data);
//         });
//         break;
//     case "update_post":
//         let id_updatePost = args[1];
//         let objPost = JSON.parse(args[2]);
//         const post_update = new Post(objPost);
//         post_update.update(id_updatePost).then(data=>{
//             console.log(data);
//         });
//         break;
//     case "delete_post":
//         let id_deletePost = args[1];
//         const post_delete = new Post();
//         post_delete.delete(id_deletePost).then(data => {
//             console.log(data);
//         }).catch(error => {
//             console.log(error);
//         });
//         break;
//     case "read_user":
//         read(args.slice(1)[0]);
//         break;
//     case "create_posts":
//         const [title, body] = args.slice(1);
//         const post = new Post({ title, body });

//     post
//       .create()
//       .then(data => console.log(data))
//       .catch(err => console.error(err));
//     break;
//   default:
//     console.log('Unknown operation!');
// }
