# Inventory Management System

A robust **Inventory Management** web application featuring comprehensive CRUD operations and secure Authentication, built with the MERN stack.


**[Live Demo](https://newdemo.url)**

Test Account:
- **Email**: demo@demo.com
- **Password**: password123

## Technology Stack
This project utilizes the following technologies:

- **Front-end**: React, React Router, Redux, Sass
- **Back-end**: Node.js, Express, MongoDB, Mongoose, PassportJS (local strategy)

## Setup Instructions
Configure your own `MongoURI` from your MongoDB Atlas database in `./config/keys.js`:

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI",
  sessionSecret: "YOUR_SECRET_WORD"
};
