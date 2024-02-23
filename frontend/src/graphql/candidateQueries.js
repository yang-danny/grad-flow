import {gql} from 'graphql-tag'

const FETCH_CANDIDATES=gql`
query{
  getCandidates {
    id
    firstname
    lastname
    avatar
    city
    country
    role
  }
}
`
const FETCH_CANDIDATE_BY_ID=gql`
query($candidateId: ID!) {
  getCandidate(id: $candidateId) {
    id
    firstname
    lastname
    avatar
    address
    city
    country
    role
    email
    phone
    school
    degree
    employers {
      id
      name
      industry
      website
      logo
      description
    }
  }
}
`
export { FETCH_CANDIDATES,FETCH_CANDIDATE_BY_ID };