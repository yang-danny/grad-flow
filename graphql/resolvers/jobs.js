const Job = require('../../models/Job');
const { ApolloError } = require('apollo-server-errors');
module.exports = {
    Query:{
        async getJob(parent,args,context) {
            try {
           const result = await Job.findById(args.id).populate('employer').exec();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async getJobs() {
            try {
           const result = await Job.find().populate('employer').exec();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
    },
    Mutation: {
        async createJob(_, {createJobInput:{title,type,category, location, salary, eligibility,level,shift,createdDate,closeDate, description, company}}) {
            const newJob = new Job({
                title: title,
                type: type,
                category: category,
                location: location,
                salary: salary,
                eligibility:eligibility,
                level: level,
                shift: shift,
                createdDate,createdDate,
                closeDate,closeDate,
                description:description,
                company: company,
            });
            const res = await newJob.save();
            return {
                id: res.id,
                ...res._doc
            };
        },
    },
   
}