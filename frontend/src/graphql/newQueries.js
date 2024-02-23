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
const FETCH_NEWS_BY_ID=gql`
query($newsId: ID!){
  getNew(id: $newsId) {
    title
    publishDate
    category
    author
    photo
    body
  }
}
`

export { FETCH_NEWS,FETCH_NEWS_BY_ID };