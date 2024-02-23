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
export { FETCH_JOBS,FETCH_JOB_BY_ID,SEARCH_JOBS,FETCH_JOB_TYPES };