import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Grid } from 'semantic-ui-react'
import PostCard from './PostCard'

function Home () {
  const {
    loading,
    data
  } = useQuery(FETCH_POSTS_QUERY)

  console.log(data)

  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading
          ? (
            <h1>loading posts ...</h1>
            )
          : (
              data &&
          data.getPosts?.map((post) => (
            <Grid.Column key={post.id}>
              <PostCard post={post} />
            </Grid.Column>
          ))
            )}
      </Grid.Row>
    </Grid>
  )
}

const FETCH_POSTS_QUERY = gql`
  query posts {
    getPosts {
      id
      body
      username
      createdAt
    }
  }
`
export default Home
