// d home page and create authendication for home page using jwt.
// Here's an example MERN code for a login page, signup page, and home page with authentication using JSON Web Tokens (JWT):

// Server-side code:

// javascript
// Copy code
// // server.js

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');

// const app = express();
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const port = process.env.PORT || 5000;

// mongoose.connect('mongodb://localhost/mern-auth', { useNewUrlParser: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// const User = require('./models/User');

// app.post('/signup', (req, res) => {
//     const { name, email, password } = req.body;
//     const user = new User({ name, email, password });
//     user.save(err => {
//         if (err) {
//             res.status(500).send('Error registering new user please try again.');
//         } else {
//             res.status(200).send('Welcome to the club!');
//         }
//     });
// });

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     User.findOne({ email }, (err, user) => {
//         if (err) {
//             console.error(err);
//             res.status(500)
//                 .json({
//                     error: 'Internal error please try again'
//                 });
//         } else if (!user) {
//             res.status(401) 
//                 .json({
//                     error: 'Incorrect email or password'
//                 });
//         } else {
//             user.isCorrectPassword(password, (err, same) => {
//                 if (err) {
//                     res.status(500)
//                         .json({
//                             error: 'Internal error please try again'
//                         });
//                 } else if (!same) {
//                     res.status(401)
//                         .json({
//                             error: 'Incorrect email or password'
//                         });
//                 } else {
//                     // Issue token
//                     const payload = { email };
//                     const token = jwt.sign(payload, 'secret', {
//                         expiresIn: '1h'
//                     });
//                     res.cookie('token', token, { httpOnly: true })
//                         .sendStatus(200);
//                 }
//             });
//         }
//     });
// });

// const checkToken = (req, res, next) => {
//     const token = req.cookies.token;
//     if (!token) {
//         return res.status(401)
//             .json({
//                 message: 'Auth failed'
//             });
//     }
//     jwt.verify(token, 'secret', (err, decoded) => {
//         if (err) {
//             return res.status(401)
//                 .json({
//                     message: 'Auth failed'
//                 });
//         }
//         req.email = decoded.email;
//         next();
//     });
// };

// app.get('/home', checkToken, (req, res) => {
//     res.status(200).json({
//         message: 'Hello World!'
//     });
// });

// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });
// Client-side code:

// javascript
// Copy code
// // App.js

// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleSignup = () => {
//     axios.post('http://localhost:5000/signup', {
//       name,
//       email,
//       password
//     })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
//   };

 




// veerababup9999@gmail.com
// please continue the above react code.
// Here's the rest of the client-side code:

// javascript
// Copy code
// const handleLogin = () => {
//   axios.post('http://localhost:5000/login', {
//     email,
//     password
//   })
//   .then(res => {
//     console.log(res);
//     setIsLoggedIn(true);
//   })
//   .catch(err => console.log(err));
// };

// const handleLogout = () => {
//   document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
//   setIsLoggedIn(false);
// };

// const handleHome = () => {
//   axios.get('http://localhost:5000/home', {
//     withCredentials: true
//   })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
// };

// return (
//   <div className="App">
//     {isLoggedIn ?
//       <div>
//         <button onClick={handleLogout}>Logout</button>
//         <button onClick={handleHome}>Home</button>
//       </div>
//       :
//       <div>
//         <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
//         <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//         <button onClick={handleSignup}>Signup</button>
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     }
//   </div>
// );
// In this code, the handleSignup, handleLogin, handleLogout, and handleHome functions are used to handle user interactions. When the user clicks the "Signup" button, the handleSignup function sends a POST request to the server to register a new user. When the user clicks the "Login" button, the handleLogin function sends a POST request to the server to authenticate the user and retrieve a JSON Web Token. When the user clicks the "Logout" button, the handleLogout function deletes the JSON Web Token cookie and sets the isLoggedIn state to false. Finally, when the user clicks the "Home" button, the handleHome function sends a GET request to the server to retrieve the home page, which is protected by the checkToken middleware.





// veerababup9999@gmail.com
// please contine the above code if anything missing.
// Sure, here's the missing server-side code:

// php
// Copy code
// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');

// const app = express();
// app.use(express.json());
// app.use(cookieParser());

// mongoose.connect('mongodb://localhost:27017/mern-auth', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.log(err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// });

// const User = mongoose.model('User', userSchema);

// app.post('/signup', async (req, res) => {
//   const { name, email, password } = req.body;

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const user = new User({ name, email, password: hashedPassword });

//   try {
//     await user.save();
//     res.json({ message: 'User created' });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (!user) {
//     res.status(401).json({ error: 'Invalid email or password' });
//     return;
//   }

//   const isPasswordValid = await bcrypt.compare(password, user.password);

//   if (!isPasswordValid) {
//     res.status(401).json({ error: 'Invalid email or password' });
//     return;
//   }

//   const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });

//   res.cookie('token', token, { httpOnly: true });

//   res.json({ message: 'Login successful' });
// });

// const checkToken = (req, res, next) => {
//   const token = req.cookies.token;

//   if (!token) {
//     res.status(401).json({ error: 'Unauthorized' });
//     return;
//   }

//   try {
//     const decoded = jwt.verify(token, 'secret');
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     console.log(err);
//     res.status(401).json({ error: 'Unauthorized' });
//   }
// };

// app.get('/home', checkToken, (req, res) => {
//   res.json({ message: 'Home page' });
// });

// app.listen(5000, () => console.log('Server started'));
// In this code, the server listens on port 5000 and connects to a local MongoDB database named "mern-auth". There are two endpoints for handling user authentication: /signup and /login. The /signup endpoint receives a POST request with a name, email, and password, hashes the password, creates a new user in the database, and returns a success message. The /login endpoint receives a POST request with an email and password, verifies the email and password against the database, generates a JSON Web Token using the user's ID, sets a cookie with the token, and returns a success message. There is also a middleware function named checkToken that verifies the JSON Web Token cookie and sets the userId property of the request object. Finally, there is an endpoint for the home page that is protected by the checkToken middleware. If the JSON Web Token is valid, the endpoint returns a success message. Otherwise, it returns an unauthorized error message.