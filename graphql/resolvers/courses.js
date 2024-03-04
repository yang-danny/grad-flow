const Course = require('../../models/Course');
const { ApolloError } = require('apollo-server-errors');
module.exports = {
    Query:{
        async getCourse(parent,args,context) {
            try {
           const result = await Course.findById(args.id).populate('provider').exec();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async getCourses() {
            try {
            const result = await Course.find().populate('provider').exec();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async getCourseLevel() {
            try {
            const result = await Course.find();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async getCourseSubject() {
            try {
            const result = await Course.find();
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async searchCourses(_, {courseSearchFilter:{title,level, subject},sortBy:{field,order}}) {
            const sortObj = {}
            sortObj[field] = order === 'ASC' ? 1 : -1
            try {
              let result = await Course.find().sort(sortObj).populate('provider').exec();
              result=result.filter((course)=>{
                return (course.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) 
                     && course.level.toLocaleLowerCase().includes(level.toLocaleLowerCase())
                     && course.subject.toLocaleLowerCase().includes(subject.toLocaleLowerCase()))
              })
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
          async getCoursesBySubject(_, {subject,sortBy:{field,order}}) {
            const sortObj = {}
            sortObj[field] = order === 'ASC' ? 1 : -1
            try {
              let result = await Course.find().sort(sortObj).populate('provider').exec();
              result=result.filter((course)=>{
                return ( course.subject.toLocaleLowerCase().includes(subject.toLocaleLowerCase()))
              })
            return result
            } catch (err) {
              throw new ApolloError(err);
            }
          },
    },
}