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
  products: {
    name: 'string',
    price: 'number',
  },
};

class ActiveRecord {
  static table_name;

  constructor(args) {
    this.data = args;
  }

  save() {
    return new Promise((resolve, reject) => {
      if (!fs.existsSync(`./data/${this.constructor.table_name}.json`)) {
        reject(`File ${this.constructor.table_name}.json doesn't exists`);
      } else {
        const files = require(`../data/${this.constructor.table_name}.json`);

        this.data.id = files.length + 1;
        files.push(this.data);

        delete this.data.password_confirmation;

        fs.writeFileSync(
          `./data/${this.constructor.table_name}.json`,
          JSON.stringify(files, null, 2),
        );
        resolve(files);
      }
    });
  }

  update(id) {
    return new Promise((resolve, reject) => {
      let objJSON = require(`../data/${this.table_name}.json`);
      let msg = 'Failed update data';
      let objJSONMap = objJSON.map(i => {
        if (i.id == id) {
          for (let key in i) {
            if (Object.keys(schema[this.table_name]).includes(key)) {
              i[key] = this.data[key];
            }
          }
          msg = 'Successfully updated data';
          return i;
        } else {
          return i;
        }
      });
      fs.writeFileSync(`./data/${this.table_name}.json`, JSON.stringify(objJSONMap, null, 2));
      resolve(msg);
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      let objJSON = require(`../data/${this.table_name}.json`);
      let msg = 'Failed update data';
      for (let i in objJSON) {
        if (objJSON[i]['id'] == id) {
          delete objJSON[i];
          msg = 'Successfully deleted data';
        }
      }
      let result = objJSON.filter(i => i !== null);
      fs.writeFileSync(`./data/${this.table_name}.json`, JSON.stringify(result, null, 2));
      resolve(msg);
    });
  }
}

module.exports = ActiveRecord;
