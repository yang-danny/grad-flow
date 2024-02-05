const User = require('../../models/User');
const { ApolloError } = require('apollo-server-errors');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
    validateRegisterInput,
    validateLoginInput
  } = require('../../utils/validators');
module.exports = {
    Mutation: {
        async registerUser(_, {registerInput: {username, email, password, confirmPassword} }) {
            // Do input validation
            const { valid, errors } = validateRegisterInput(
                username,
                email,
                password,
                confirmPassword
              );
              if (!valid) {
                throw new ApolloError(errors.username || errors.email || errors.password || errors.confirmPassword);
              }
            const oldUser = await User.findOne({ email });
            if (oldUser) {
                throw new ApolloError('A user is already registered with the email: ' + email, 'USER_ALREADY_EXISTS');
            }
            var encryptedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                username: username,
                email: email.toLowerCase(),
                password: encryptedPassword
            });
            const token = jwt.sign(
                { user_id: newUser._id, username  },
                "UNSAFESTRING",
                {
                  expiresIn: "2h",
                }
            );
            newUser.token = token;
            const res = await newUser.save();
            return {
                id: res.id,
                ...res._doc
            };
        },
        async loginUser(_, {loginInput: {username, password} }) {
           // Do input validation
           const { valid, errors } = validateLoginInput(
            username,
            password,
          );
          if (!valid) {
            throw new ApolloError(errors.username || errors.password );
          }
            const user = await User.findOne({ username });
            if (user && (await bcrypt.compare(password, user.password))) {
                // Create token
                const token = jwt.sign(
                  { user_id: user._id, username },
                  "UNSAFESTRING",
                  {
                    expiresIn: "2h",
                  }
                );
                // save user token
                user.token = token;
                return {
                    id: user.id,
                    ...user._doc
                }
            } else {
                throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD');
            }
        }
    },
    // Query: {
    //     user: (_, {ID}) => User.findById(ID)
    // }
}