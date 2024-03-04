import {gql} from 'graphql-tag'

const FETCH_COURSE_LEVEL=gql`
query{
  getCourseLevel {
    id
    level
  }
}
`
const FETCH_COURSE_SUBJECT=gql`
query{
  getCourseSubject {
    id
    subject
  }
}
`

const FETCH_COURSE_BY_ID=gql`
query($courseId: ID!){
    getCourse(id:$courseId){
    id
    title
    photo
    subject
    type
    level
    skills
    duration
    description
    provider {
      name
      logo
    }
    }
}
`
const SEARCH_COURSES=gql`
query ($courseSearchFilter:CourseSearchFilter, $sortBy:SortBy){
  searchCourses (courseSearchFilter:$courseSearchFilter, sortBy:$sortBy){
    id
    title
    photo
    subject
    type
    level
    duration
    provider {
      name
      logo
    }
  }
}
`
const FETCH_COURSE_BY_SUBJECT=gql`
query ($subject: String, $sortBy:SortBy){
  getCoursesBySubject(subject: $subject,sortBy:$sortBy) {
    id
    title
    photo
    subject
    type
    level
    duration
    provider {
      name
      logo
    }
  }
}
`
export {FETCH_COURSE_LEVEL,FETCH_COURSE_SUBJECT,FETCH_COURSE_BY_ID,SEARCH_COURSES,FETCH_COURSE_BY_SUBJECT }