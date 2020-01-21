var fs = require('fs');
function updateUser(id,obj){
    let objJSON = require('./data/users.json');
    let objJSONMap = objJSON.map(i=>{
        if(i.id===id){
            i.id=id;
            i.name=obj.name;
            i.email=obj.email;
            i.password=obj.password;
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
module.exports = updateUser