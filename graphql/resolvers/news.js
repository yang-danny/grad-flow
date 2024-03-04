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
          async getNew(parent,args,context) {
            try {
            const result = await New.findById(args.id);
           return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
    },
}