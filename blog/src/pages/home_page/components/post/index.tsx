import React from 'react';

import { Container, Img } from './styles';

import { parseDate } from '../../../../utils/dateUtils';
import { Link } from 'react-router-dom';
import { IPost } from '../../../../@types/interfaces';

interface PostProp {
  post: IPost;
}

const Post = ({ post }: PostProp) => {
  return (
    <Container>
      <Link to={{ pathname: `/artigo/${post.id}` }}>
        <Img url={post.thumbnail} />
      </Link>
      <div className="content">
        <div>
          <Link to={{ pathname: `/artigo/${post.id}` }}>
            <h3>{post.title}</h3>
          </Link>
          <div className="date">
            <span>Publicado em: </span>
            <strong>{parseDate(post.date, 'long')}</strong>
          </div>
        </div>
        <p>{`${post.content.replace(/<[^>]*>/g, '').substring(0, 200)}...`}</p>
        <div>
          <div className="tags">
            <h6>Assuntos: </h6>
            {post.tags.map((tag, index) => (
              <span key={`${tag}-${index}`}>{tag}</span>
            ))}
          </div>
          <Link to={{ pathname: `/artigo/${post.id}` }}>Continue lendo...</Link>
        </div>
      </div>
    </Container>
  );
};

export default Post;
