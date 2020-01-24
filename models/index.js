var fs = require('fs');

const schema = {
  users: {
    name: 'string',
    email: 'string',
    password: 'string',
  },
  posts: {
    title: 'string',
    body: 'string',
  },
};

class ActiveRecord {
<<<<<<< HEAD
  static table_name;

  constructor(args) {
    this.data = args;
  }

  // private isValidType(data, schema) {
  //     for (let key in schema) {
  //         if (typeof data[key] != schema[key]) {
  //             return false
  //         }
  //     }

  //     return true
  // }

  static create() {
    return new Promise((resolve, reject) => {
      if (fs.existsSync(`./store/${this.table_name}.json`)) {
        reject(`File ${this.table_name}.json is exists`)
      } else {
        fs.writeFileSync(`./store/${this.table_name}.json`, JSON.stringify([]));
        resolve('Successfully created file');
      }
    })
  }

  save() {
    // check apakah file.json ada
    // kalo ngga ada reject
    // Kalo ada push data baru
    return new Promise((resolve, reject) => {
      if (!fs.existsSync(`./data/${this.constructor.table_name}.json`)) {
        reject(`File ${this.table_name}.json doesn't exists`)
      } else {
        const files = require('../data/users.json');

        this.data.id = files.length + 1
        files.push(this.data)

        delete this.data.password_confirmation

        fs.writeFileSync(
          `./data/${this.constructor.table_name}.json`,
          JSON.stringify(files, null, 2)
        )
        resolve(files)
      }
    })
  }
=======
    constructor(args) {
        this.table_name = args.table_name;
        this.data = args.data
    }

    // private isValidType(data, schema) {
    //     for (let key in schema) {
    //         if (typeof data[key] != schema[key]) {
    //             return false
    //         }
    //     }

    //     return true
    // }

    create() {
        return new Promise((resolve, reject) => {
            // Simple validation
            // if (!isValidType(data, schema.users)) return reject('Schema isn\'t valid');

            // if (this.data.password !== this.data.password_confirmation) {
            //   reject('Password and it\'s confirmation doesn\'t match');
            // }

            const items = require(`${__dirname}/../data/${this.table_name}.json`)
            let newItem = {};
            newItem.id = items.length + 1;

            for (let key in this.data) {
                if (Object.keys(schema[this.table_name]).includes(key)) {
                    newItem[key] = this.data[key];
                }
            }


            items.push(newItem);
            fs.writeFileSync(
                `./data/${this.table_name}.json`,
                JSON.stringify(items, null, 2)
            );

            resolve(items)
        })
    }

    update(id){
        return new Promise((resolve,reject)=>{
            let objJSON = require(`../data/${this.table_name}.json`);
            let msg = "Failed update data";
            let objJSONMap = objJSON.map(i=>{
                if(i.id==id){
                    for (let key in i) {
                    if (Object.keys(schema[this.table_name]).includes(key)) {
                        i[key] = this.data[key];
                    }
                    }
                    msg="Successfully updated data";
                    return i;          
                }
                else{
                    return i;
                }
            });
            fs.writeFileSync(
                `./data/${this.table_name}.json`,
                JSON.stringify(objJSONMap,null,2)
            );
            resolve(msg);
        });
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            let objJSON = require(`../data/${this.table_name}.json`);
            let msg = "Failed update data";
            for (let i in objJSON){
                if (objJSON[i]['id']==id){
                    delete objJSON[i];
                    msg="Successfully deleted data";
                }
            }
            let result = objJSON.filter(i=>i!==null);
            fs.writeFileSync(
                `./data/${this.table_name}.json`,
                JSON.stringify(result,null,2)
            );
            resolve(msg);
        });
    }
>>>>>>> 31315de68db1c860682a15c89d056fec01613727
}

module.exports = ActiveRecord;
