const usersResolvers = require('./users');
const employersResolvers = require('./employers');
const jobsResolvers = require('./jobs');
const candidateResolvers= require('./candidates');
const newResolvers= require('./news');
module.exports = {
    Query: {
        ...usersResolvers.Query,
        ...employersResolvers.Query,
        ...jobsResolvers.Query,
        ...candidateResolvers.Query,
        ...newResolvers.Query,
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...employersResolvers.Mutation,
        ...jobsResolvers.Mutation,
    },
};