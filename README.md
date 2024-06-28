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



**Prerequisites**
Before you begin, ensure you have met the following requirements:

A computer with an internet connection
Basic knowledge of command-line interface (CLI)
1. Download and Install Node.js and npm
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, and npm is the package manager for Node.js packages.

Visit the official Node.js website: Node.js
Download the LTS (Long Term Support) version.
Follow the installation instructions for your operating system:
Windows: Run the downloaded installer and follow the setup steps.
macOS: Run the downloaded .pkg file and follow the setup steps.
Linux: Use the package manager specific to your distribution (e.g., apt for Ubuntu, yum for CentOS).
Verify the installation by running the following commands in your terminal:


node -v
npm -v
You should see the installed versions of Node.js and npm.

2. Clone the Project Repository
If the project is hosted on a platform like GitHub, you will need to clone the repository to your local machine.

Install Git from the official website: Git

Windows: Download the Git for Windows installer and run it.
macOS: Install via Homebrew by running brew install git.
Linux: Use the package manager specific to your distribution.
Clone the repository using the following command in your terminal:


git clone https://github.com/yourusername/your-repository.git
Replace yourusername and your-repository with your GitHub username and the repository name.

3. Navigate to the Project Directory
Once the repository is cloned, navigate to the project directory:


cd your-repository
4. Install Project Dependencies
With Node.js and npm installed, you can now install the project dependencies.


npm install
This command reads the package.json file and installs all the required dependencies listed under dependencies and devDependencies.

5. Start the Development Server
To run the application in development mode, use the following command:


npm start
This command starts the development server and opens the application in your default web browser. The app will typically run at http://localhost:3000.

6. Running Tests
To run tests, use the following command:


npm test
This command launches the test runner in interactive watch mode. Refer to the running tests section for more information.

7. Build the Application for Production
To build the app for production, use the following command:


npm run build
This command creates an optimized build of the application in the build folder. The build is minified, and the filenames include hashes for cache busting. The app is now ready to be deployed.

8. Serve the Production Build
You can serve the production build locally using a static server. One simple way is to use the serve package:

Install serve globally:

npm install -g serve
Serve the build folder:

serve -s build
This will start a server on a default port (usually 5000). Open http://localhost:5000 to view it in your browser.

9. Deploying the Application
Refer to the Create React App deployment documentation for detailed instructions on how to deploy your application to various platforms such as GitHub Pages, Heroku, Netlify, or Vercel.
