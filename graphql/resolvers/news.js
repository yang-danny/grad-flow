const New = require('../../models/New');
const { ApolloError } = require('apollo-server-errors');
module.exports = {
    Query:{
          async getNews() {
            try {
            const result = await New.find();
           return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
    },
}