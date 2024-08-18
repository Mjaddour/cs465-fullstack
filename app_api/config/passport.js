const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    },
    async (username, password, done) => {
        const q = await User
               .findOne({ email: username})
               .exec();



               console.log(q);

               if(!q)
               {
                  return done(null, false, { message: 'Incorrect Username'});
               }
               if(!q.validPassword(password))
               {
                  return done(null, false, { message: 'Incorrect Password'});
               }
               return done(null, q);
    }
));

// Method to authenticate JWT
function authenticateJWT(req, res, next) {
    // Get authorization header
    const authHeader = req.headers['authorization'];
    console.log('Auth Header:', authHeader); // For logging

    if (!authHeader) {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    // Split the auth header into 'Bearer' and token
    const headers = authHeader.split(' ');
    if (headers.length < 2) {
        console.log('Not enough tokens in Auth Header:', headers.length);
        return res.sendStatus(401);
    }

    const token = headers[1];
    console.log('Token:', token); // For logging

    if (!token) {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }

    // Verify the JWT token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log('Token Validation Error:', err);
            return res.status(401).json('Token Validation Error!');
        }

        req.auth = decoded; // Attach the decoded JWT to the request
        next(); // Proceed to the next middleware/route handler
    });
}

module.exports = { authenticateJWT };