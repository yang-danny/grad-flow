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
export { FETCH_CANDIDATES };