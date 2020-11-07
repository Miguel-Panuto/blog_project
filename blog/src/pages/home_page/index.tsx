import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { indexPosts } from '../../services/posts_controller';

import Header from '../../components/header';

import { Container } from './styles';

import Post from './components/post';

const Home = () => {
  const [posts, setPosts] = useState(indexPosts());

  return (
    <>
      <Header />
      <Container>
        <div>
          {posts.map((post) => (
            <Post
              post={post}
            />
          ))}
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">2020</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
};

export default Home;
