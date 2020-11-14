import React, { useEffect, useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import {
  FiArrowLeft,
  FiArrowRight,
  FiSkipBack,
  FiSkipForward,
} from 'react-icons/fi';

import { indexPosts } from '../../services/posts_controller';
import Header from '../../components/header';
import { Container } from './styles';
import Post from './components/post/index';
import { IPost } from '../../@types/interfaces';
import { findAllTags } from '../../services/tags_controller';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [pageLength, setPageLength] = useState(0);
  const { pathname } = useLocation();
  const history = useHistory();
  const params = useParams<any>();
  const [pg, setPg] = useState<number>(
    params.pg !== undefined ? parseInt(params.pg) : 1
  );

  useEffect(() => {
    loadParams();
    loadPosts();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [pathname, pg]);

  const loadPosts = async () => {
    const findPosts = await indexPosts(
      pg,
      10,
      params.tag,
      params.year,
      params.month
    );
    setPosts(findPosts.posts);
    setPageLength(findPosts.count);
  };

  const loadParams = async () => {
    const tags = await findAllTags();
    if (params.tag !== undefined) {
      if (!tags.includes(params.tag)) return history.push('/');
    } else if (params.year !== undefined) {
      if (isNaN(params.year) || isNaN(params.month)) return history.push('/');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className="content">
          <div>
            {posts.length > 0
              ? posts.map((post, index) => (
                  <Post key={`${post.id}-${index}`} post={post} />
                ))
              : null}
          </div>
        </div>
        <div className="pagination">
          {pageLength > 10 ? (
            <Pagination
              activePage={pg}
              firstPageText={<FiSkipBack />}
              lastPageText={<FiSkipForward />}
              prevPageText={<FiArrowLeft />}
              nextPageText={<FiArrowRight />}
              itemsCountPerPage={10}
              totalItemsCount={pageLength}
              hideDisabled
              hideNavigation
              onChange={(page) => {
                if (params.tag !== undefined)
                  history.push(`/${page}/${params.tag}`);
                else if (params.year !== undefined)
                  history.push(`/${page}/${params.year}/${params.month}`);
                else history.push(`/${page}`);
                setPg(page);
              }}
              innerClass="pagination-nav"
              itemClass="pagination-item"
              linkClass="link-pg"
            />
          ) : null}
        </div>
      </Container>
    </>
  );
};

export default Home;
