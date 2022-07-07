import { ApolloClient, gql, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl577l92j4drw01t36kl5bul3/master",
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