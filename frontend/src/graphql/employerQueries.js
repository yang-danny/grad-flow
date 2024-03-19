import {gql} from 'graphql-tag'

const FETCH_EMPLOYER_INDUSTRY=gql`
query{
  getEmployerIndustry {
    id
    industry
  }
}
`
const SEARCH_EMPLOYERS =gql`
query($employerSearchFilter:EmployerSearchFilter, $sortBy:SortBy){
searchEmployers(employerSearchFilter: $employerSearchFilter,sortBy:$sortBy) {
     id
   name
    description
    website    
    phone
   email
   location
   industry
   logo
  }
}
`
const FETCH_EMPLOYER_BY_ID=gql`
query($employerId: ID!) {
  getEmployer(id: $employerId) {
    name
   description
   website
   phone
   email
   location
   industry
   logo
  }
}
`

export {FETCH_EMPLOYER_INDUSTRY,SEARCH_EMPLOYERS,FETCH_EMPLOYER_BY_ID}