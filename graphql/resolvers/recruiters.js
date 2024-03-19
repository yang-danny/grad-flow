const Recruiter = require('../../models/Recruiter');
const { ApolloError } = require('apollo-server-errors');

module.exports = {
    Query:{
        async getRecruiters() {
            try {
              const result = await Recruiter.find();
              return result;
            } catch (err) {
              throw new ApolloError(err);
            }
          },
        async getRecruiter(parent,args,context) {
          try {
           const result = await Recruiter.findById(args.id);
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
        async getServices() {
            try {
            const result = await Recruiter.find();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async searchRecruiters(_, {recruiterSearchFilter:{name,location, service},sortBy:{field,order}}) {
            const sortObj = {}
            sortObj[field] = order === 'ASC' ? 1 : -1
            try {
              let result = await Recruiter.find().sort(sortObj);
              result=result.filter((recruiter)=>{
                return (recruiter.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()) 
                     && recruiter.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())
                     && recruiter.service.includes(service))
              })
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
    },
   
}