import React from 'react';

import { Post as Container } from '../styles';

import { parseDate } from '../../../utils/dateUtils';
import { Link } from 'react-router-dom';
import { IPost } from '../../../@types/interfaces';

interface PostProp {
  post: IPost;
}

const Post = ({ post } : PostProp) => {
  return (
    <Container>
      <div>
        <Link to={{ pathname: '/post' }}>
          <h3>{post.title}</h3>
        </Link>
        <strong>{parseDate(post.date, 'long')}</strong>
      </div>
      <p>{`${post.content.substring(0, 200)}...`}</p>
      <div className="tags">
        <h6>Assuntos: </h6>
        {post.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
      <Link to={{ pathname: '/post' }}>Continue lendo...</Link>
    </Container>
  );
};

export default Post;
