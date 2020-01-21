var fs = require('fs');
function updateUser(id,obj){
    let objJSON = require('./data/users.json');
    let objJSONMap = objJSON.map(i=>{
        if(i.id===id){
            return obj;
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
module.exports = updateUser