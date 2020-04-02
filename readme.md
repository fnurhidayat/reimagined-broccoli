# CRUD Basic
**Please Ignore *node_modules/***
## Create CRUD API
### Users API
1. Create GET **/users** endpoint, to get all user data in **users.json**
2. Create POST **/users** endpoint, to create new user, it takes this request body:
  ```JSON
    {
      "name":"Wuhan",
      "email":"test01@mail.com",
      "password":"qwerty",
      "password_confirmation":"qwerty"
    }
  ```
3. Password and its confirmation should have match.
  
### Posts API
1. Create GET **/posts** endpoint, to get all post data in **posts.json**
2. Create POST **/posts** endpoint, to create new posts, it takes this request body:
  ```JSON
    {
      "title":"Lorem",
      "body":"Ipsum Dolor Sit Amet"
    }
  ```

## Schema
### Users
```JSON
{
  "id": "number",
  "name": "string",
  "email": "string",
  "password": "string"
}
```
### Post
```JSON
{
  "id": "number",
  "title": "string",
  "body": "string"
}
```
