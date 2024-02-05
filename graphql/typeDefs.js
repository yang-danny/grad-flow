const { gql } = require('apollo-server');

module.exports = gql`
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
    getEmployers:[Employer!]!
    getJob(id: ID!): Job
    getJobs:[Job]
    getCandidate(id: ID!): Candidate
    getCandidates:[Candidate]
    getNews:[New]
}

type Mutation {
    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
    createEmployer(createEmployerInput:CreateEmployerInput):Employer
    createJob(createJobInput:CreateJobInput):Job
}
`