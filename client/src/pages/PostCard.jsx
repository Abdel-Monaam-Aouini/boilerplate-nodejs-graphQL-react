import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function PostCard ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta>{new Date(createdAt).toLocaleString()}</Card.Meta>
          <Card.Description>{body}</Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default PostCard
