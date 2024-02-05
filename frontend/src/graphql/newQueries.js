import {gql} from 'graphql-tag'

const FETCH_NEWS=gql`
query {
  getNews {
    id
    photo
    title
    publishDate
    category
    author
    body
  }
}
`
export { FETCH_NEWS };