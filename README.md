# LEAVE-API

API for noaya leave management website.

## Getting Started

### Dependencies

```
npm install typescript ts-node express @types/express morgan @types/morgan nodemon bycrypt @types/bycrypt mongodb
```

### Routes

- Account
  - Login Account
  ```
  POST ~/account/authenticate
  ```
  - Update Account Password
  ```
  POST ~/account/change-password
  ```
- User
  - Get All Users
  ```
  GET ~/user
  ```
  - Get User(account)
  ```
  GET ~/employee/user
  ```
  - Get User(admin)
  ```
  GET ~/user/:username
  ```
  - Create User
  ```
  POST ~/user
  ```
  - Update User(admin)
  ```
  PUT ~/user/:username
  ```
  - Update User(employee)
  ```
  PUT ~/employee/user
  ```
  - Delete User
  ```
  DELETE ~/user/:username
  ```
- leaves
  - Get User Leave(admin)
  ```
  GET ~/leave/:username
  ```
  - Get User Leave(employee)
  ```
  GET ~/employee/leave
  ```
  - Create User leave
  ```
  POST ~/employee/leave
  ```

## Authors

Contributors names and contact info

J.C. James Arcilla (jla@noaya.no)

## Acknowledgments

Inspiration, code snippets, etc.

- [How to Create a Simple REST API using TypeScript and Node.js](https://www.section.io/engineering-education/how-to-create-a-simple-rest-api-using-typescript-and-nodejs/)
- [README template](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc#project-title)
- [RESTful APIs in 100 Seconds](https://www.youtube.com/watch?v=-MTSQjw5DrM)
- [JSONWebToken](https://jwt.io/)
- [How to Use TypeScript with MongoDB Atlas](https://www.mongodb.com/compatibility/using-typescript-with-mongodb-tutorial)
