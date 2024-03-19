const Job = require('../../models/Job');
const { ApolloError } = require('apollo-server-errors');
module.exports = {
    Query:{
        async getJob(parent,args,context) {
            try {
           const result = await Job.findById(args.id).populate('employer').populate('recruiter').exec();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async getEmployerJobs(parent,args,context) {
           
            try {
           const result = await Job.find({employer:args.employer}).populate('recruiter').populate('employer').exec();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async getRecruiterJobs(parent,args,context) {
           
            try {
           const result = await Job.find({recruiter:args.recruiter}).populate('recruiter').populate('employer').exec();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async getJobs() {
            try {
            const result = await Job.find().populate('employer').populate('recruiter').exec();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async getJobTypes() {
            try {
            const result = await Job.find();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async searchJobs(_, {jobSearchFilter:{title,location, type},sortBy:{field,order}}) {
            const sortObj = {}
            sortObj[field] = order === 'ASC' ? 1 : -1
            try {
              let result = await Job.find().sort(sortObj).populate('employer').exec();
              result=result.filter((job)=>{
                return (job.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) 
                     && job.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())
                     && job.type.toLocaleLowerCase().includes(type.toLocaleLowerCase()))
              })
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