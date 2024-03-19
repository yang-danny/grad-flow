import {useQuery} from '@apollo/react-hooks';
import Spinner from '../../components/Spinner';
import {FETCH_COURSE_BY_SUBJECT} from '../../graphql/courseQueries'
import CourseGrid from '../../components/CourseGrid';
const ITSkills = () => {
    const { loading, error, data } = useQuery(FETCH_COURSE_BY_SUBJECT,{ variables: {
        "subject": "IT",
        "sortBy":{"field":"title","order":"ASC"}
    }
    })
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  const items = data?.getCoursesBySubject
  return (
    <div>
      <CourseGrid items={items} />
    </div>
  )
}

export default ITSkills