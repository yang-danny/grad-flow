const usersResolvers = require('./users');
const employersResolvers = require('./employers');
const jobsResolvers = require('./jobs');
const candidateResolvers= require('./candidates');
const newResolvers= require('./news');
const courseResolvers = require('./courses')
const providerResolvers= require('./providers')
const recruiterSchema= require('./recruiters')
module.exports = {
    Query: {
        ...usersResolvers.Query,
        ...employersResolvers.Query,
        ...jobsResolvers.Query,
        ...candidateResolvers.Query,
        ...newResolvers.Query,
        ...courseResolvers.Query,
        ...providerResolvers.Query,
        ...recruiterSchema.Query,
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...employersResolvers.Mutation,
        ...jobsResolvers.Mutation,
    },
};