var fs = require('fs');
function updateUser(id,obj){
    let objJSON = require('./data/users.json');
    let objJSONMap = objJSON.map(i=>{
        if(i.id==id){
            i.name=obj.name;
            i.email=obj.email;
            i.password=obj.password;
            console.log("Successfully updated data");
            return i;          
        }
        else{
            return i;
        }
    });
    fs.writeFileSync(
        `./data/users.json`,
        JSON.stringify(objJSONMap,null,2)
    ); 
}
function updatePost(id,obj){
    let objJSON = require('./data/post.json');
    let objJSONMap = objJSON.map(i=>{
        if(i.id==id){
            i.title=obj.title;
            i.body=obj.body;
            console.log("Successfully updated data");
            return i;          
        }
        else{
            return i;
        }
    });
    fs.writeFileSync(
        `./data/post.json`,
        JSON.stringify(objJSONMap,null,2)
    ); 
}
module.exports = {
    user:updateUser,
    post:updatePost
}