var fs = require('fs');
function deleteUser(id){  
    let objJSON = require('./data/users.json');
    for (let i in objJSON){
        if (objJSON[i]['id']==id){
            delete objJSON[i];
        }
    }
    let result = objJSON.filter(i=>i!==null);
    fs.writeFileSync(
        `./data/users.json`,
        JSON.stringify(result,null,2)
    ); 
}
module.exports={
    user:deleteUser
};