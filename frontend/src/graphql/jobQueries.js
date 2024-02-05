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
export { FETCH_JOBS };