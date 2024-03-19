import {gql} from 'graphql-tag'

const FETCH_RECRUITER_SERVICE=gql`
query{
  getServices {
    id
    service
  }
}
`
const FETCH_RECRUITER_BY_ID=gql`
query($recruiterId:ID!){
  getRecruiter(id:$recruiterId) {
    id
    name
    logo
    location
    service
    website
    phone
    email
  }
}
`
const SEARCH_RECRUITERS=gql`
query($recruiterSearchFilter:RecruiterSearchFilter, $sortBy:SortBy){
  searchRecruiters (recruiterSearchFilter: $recruiterSearchFilter,  sortBy:$sortBy){
    id
    name
    logo
    service
    location
    website
    phone
    email
  }
}
`

export {FETCH_RECRUITER_SERVICE,SEARCH_RECRUITERS,FETCH_RECRUITER_BY_ID}