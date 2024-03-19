import {gql} from 'graphql-tag'

const FETCH_JOBS=gql`
query{
  getJobs {
    id
    title
    description
    location
    type
    category
    employer {
      name
      logo
    }
  }
}
`
const FETCH_JOB_TYPES=gql`
query{
  getJobTypes {
    id
    type
  }
}
`
const FETCH_JOB_BY_ID=gql`
query($jobId: ID!){
  getJob(id: $jobId) {
    title
    location
    category
    type
    salary
    level
    shift
    eligibility
    closeDate
    description
    employer {
      name
      logo
    }
    recruiter{
      name
      logo
    }
  }
}
`
const SEARCH_JOBS=gql`
query ($jobSearchFilter:JobSearchFilter, $sortBy:SortBy){
  searchJobs (jobSearchFilter:$jobSearchFilter, sortBy:$sortBy){
    id
    title
    description
    type
    category
    location
    createdDate
    employer {
      logo
      name
    }
  }
}
`
const FETCH_EMPLOYER_JOBS=gql`
query($employer: ID!) {
  getEmployerJobs(employer: $employer) {
    id
    title
    location
    type
    category
    description
    employer {
      logo
      name
    }
  }
}
`
const FETCH_RECRUITER_JOBS=gql`
query($recruiter: ID!){
  getRecruiterJobs(recruiter: $recruiter) {
     id
    title
    location
    type
    category
    description
    employer {
      logo
      name
    }
  }
}
`
export { 
  FETCH_JOBS,
  FETCH_JOB_BY_ID,
  SEARCH_JOBS,
  FETCH_JOB_TYPES,
  FETCH_EMPLOYER_JOBS,
  FETCH_RECRUITER_JOBS };