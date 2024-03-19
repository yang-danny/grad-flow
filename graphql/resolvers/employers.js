const Employer = require('../../models/Employer');
const { ApolloError } = require('apollo-server-errors');

module.exports = {
    Query:{
        async getEmployers() {
            try {
              const result = await Employer.find();
              return result;
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async getEmployer(parent,args,context) {
            try {
           const result = await Employer.findById(args.id);
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async searchEmployers(_, {employerSearchFilter:{name,location, industry},sortBy:{field,order}}) {
            const sortObj = {}
            sortObj[field] = order === 'ASC' ? 1 : -1
            try {
              let result = await Employer.find().sort(sortObj);
              result=result.filter((employer)=>{
                return (employer.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()) 
                     && employer.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())
                     && employer.industry.toLocaleLowerCase().includes(industry.toLocaleLowerCase()))
              })
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async getEmployerIndustry() {
            try {
            const result = await Employer.find();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
    },

    Mutation: {
        async createEmployer(_, {createEmployerInput:{name, description, website, phone, email, location, industry,logo}}) {

            const oldEmployer = await Employer.findOne({ email });
            if (oldEmployer) {
                throw new ApolloError('An employer is already registered with the email: ' + email, 'EMPLOYER_ALREADY_EXISTS');
            }
            const newEmployer = new Employer({
                name: name,
                description:description,
                website: website,
                phone:phone,
                email: email.toLowerCase(),
                location: location,
                industry:industry,
                logo:logo
            });
            const res = await newEmployer.save();
            return {
                id: res.id,
                ...res._doc
            };
        },
    },
   
}