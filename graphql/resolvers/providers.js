const Provider = require('../../models/Provider');
const { ApolloError } = require('apollo-server-errors');
module.exports = {
    Query:{
        async getProviders() {
            try {
            const result = await Provider.find();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
    },
}