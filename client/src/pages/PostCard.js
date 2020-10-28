import React from "react";
import {Card, Image } from "semantic-ui-react";
import { moment } from "moment";

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta>{createdAt ? moment(createdAt).fromNow() : ""}</Card.Meta>
          <Card.Description>{body}</Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}

export default PostCard;
