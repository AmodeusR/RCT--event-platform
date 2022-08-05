import { ApolloClient, gql, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    "Authorization": `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache()
});

export const GET_LESSONS_QUERY = gql`
  query {
    lessons (orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      availableAt
      lessonType
    }
  }
`

export const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug ($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`

export const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`