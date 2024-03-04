const Candidate = require('../../models/Candidate');
const { ApolloError } = require('apollo-server-errors');
module.exports = {
    Query:{
        async getCandidate(parent,args,context) {
            try {
           const result = await Candidate.findById(args.id).populate('employers').exec();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async getCandidates() {
            try {
            const result = await Candidate.find().populate('employers').exec();
           return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
    },
}