const { gql } = require('apollo-server');

module.exports = gql`
enum Order {
  ASC
  DESC
}
input SortBy {
  field: String
  order: Order
}
type User {
    username: String
    email: String
    password: String
    token: String
}
type Employer {
    id:ID!
    name: String
    description: String
    website: String
    phone: String
    email: String
    location: String
    industry: String
    logo: String
}
type Recruiter {
    id:ID!
    name: String
    logo: String
    service:[String]
    location: String
    website: String
    phone: String
    email: String
}
type Job {
    id:ID!
    title:  String 
    type:  String
    category:  String
    location: String
    salary: String
    eligibility:String
    level:  String
    shift: String
    createdDate: String
    closeDate: String
    description:  String 
    employer:Employer
    recruiter:Recruiter
}
type Provider {
    name: String
    logo: String
}
type Course {
    id:ID!
    title:  String 
    photo: String
    subject: String
    type:  String
    skills:  String
    level:  String
    duration: String
    description: String
    provider:Provider
}
input JobSearchFilter {
    title:  String, 
    location: String,
    type:  String,
}
input CourseSearchFilter {
    title:  String, 
    level: String,
    subject:  String,
}
input EmployerSearchFilter{
    name: String,
    location: String,
    industry: String,
}
input RecruiterSearchFilter{
    name: String,
    location: String,
    service: String,
}
type Candidate{
    id:ID!
    firstname: String
    lastname:String
    avatar:String
    address:String
    city:String
    country:String
    role:String
    email: String
    phone:String
    school:String
    degree:String
    employers:[Employer]
}
type New{
    id:ID!
    title:  String 
    publishDate:  String
    category:  String
    author: String
    body: String
    photo: String
}
input RegisterInput {
    username: String,
    email: String,
    password: String,
    confirmPassword:String 
}
input LoginInput {
    username: String,
    password: String 
}
input CreateEmployerInput {
    name: String,
    description: String,
    website: String,
    phone: String,
    email: String,
    location: String,
    industry: String,
    logo: String
}
input CreateJobInput {
    title:  String, 
  type:  String,
  category:  String,
  location: String,
  salary: String,
  eligibility:String,
  level:  String,
  shift: String,
  createdDate: String,
  closeDate: String,
  description:  String, 
  company: String 
}
type Query {
    getEmployers:[Employer]
    getEmployer(id:ID!):Employer
    searchEmployers(employerSearchFilter:EmployerSearchFilter, sortBy: SortBy):[Employer]
    getEmployerIndustry:[Employer]
    getJob(id: ID!): Job
    getJobs:[Job]
    getEmployerJobs(employer:ID!):[Job]
    getRecruiterJobs(recruiter:ID!):[Job]
    getJobTypes:[Job]
    searchJobs(jobSearchFilter:JobSearchFilter, sortBy: SortBy ): [Job]
    getCandidate(id: ID!): Candidate
    getCandidates:[Candidate]
    getNews:[New]
    getNew(id: ID!): New
    getCourse(id: ID!): Course
    getCourses:[Course]
    getCourseLevel:[Course]
    getCourseSubject:[Course]
    searchCourses(courseSearchFilter:CourseSearchFilter, sortBy: SortBy ): [Course]
    getProviders:[Provider]
    getCoursesBySubject(subject:String, sortBy: SortBy ): [Course]
    getRecruiters:[Recruiter]
    getRecruiter(id:ID!): Recruiter
    searchRecruiters(recruiterSearchFilter:RecruiterSearchFilter, sortBy: SortBy):[Recruiter]
    getServices:[Recruiter]
}
type Mutation {
    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput,sortBy: SortBy): User
    createEmployer(createEmployerInput:CreateEmployerInput):Employer
    createJob(createJobInput:CreateJobInput):Job
}
`