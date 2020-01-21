var fs = require('fs');
function deleteUser(id){  
    let objJSON = require('./data/users.json');
    for (let i in objJSON){
        if (objJSON[i]['id']==id){
            delete objJSON[i];
            console.log("Successfully deleted data");
        }
    }
    let result = objJSON.filter(i=>i!==null);
    fs.writeFileSync(
        `./data/users.json`,
        JSON.stringify(result,null,2)
    ); 
}
function deletePost(id){  
    let objJSON = require('./data/post.json');
    for (let i in objJSON){
        if (objJSON[i]['id']==id){
            delete objJSON[i];
            console.log("Successfully deleted data");
        }
    }
    let result = objJSON.filter(i=>i!==null);
    fs.writeFileSync(
        `./data/post.json`,
        JSON.stringify(result,null,2)
    ); 
}
module.exports={
    user:deleteUser,
    post:deletePost
};