import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import api from '../../../services/api';
import { indexPosts } from '../../../services/posts_controller';
import { Container, Img } from './styles';

import Header from '../components/header';
import { IPost } from '../../../@types/interfaces';
import Pagination from 'react-js-pagination';
import {
  FiArrowLeft,
  FiArrowRight,
  FiSkipBack,
  FiSkipForward,
} from 'react-icons/fi';
import isLoged from '../../../services/isLoged';

const Panel = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [pageLength, setPageLength] = useState(0);
  const params = useParams<any>();
  const [pg, setPg] = useState<number>(
    params.pg !== undefined ? parseInt(params.pg) : 1
  );

  useEffect(() => {
    verifyLogin();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    searchForPosts();
    // eslint-disable-next-line
  }, [pathname, pg]);

  const verifyLogin = async () => {
    if (!(await isLoged())) {
      history.push('/adm/login');
    }
  };

  const searchForPosts = async () => {
    const findPosts = await indexPosts(pg, 12)
    setPosts(findPosts.posts);
    setPageLength(findPosts.count);
  };

  const deleteHandle = async (id: string) => {
    if (window.confirm('Deseja mesmo deletar esta postagem?')) {
      const res = await api.delete(`/database/post/${id}`, {
        headers: {
          authorization: localStorage.getItem('Authorization'),
        },
      });
      if (res.status === 200) {
        setPosts(posts.filter((post) => post.id !== id));
        return alert('Deletado com sucesso!');
      }
      return alert('Houve algum erro no servidor, tente novamente mais tarde!');
    }
  };

  return (
    <Container>
      <Header />
      <h2>Gerenciar Postagens</h2>
      <div className="posts">
        {posts.length > 0
          ? posts.map((post) => {
              return (
                <div className="post" key={post.id}>
                  <h3>{post.title}</h3>
                  <div>
                    <Img url={post.thumbnail} />
                    <div className="controls">
                      <span id="manage-comments" onClick={() => history.push(`/adm/panel/manage-comments/${post.id}`)}>Comentários</span>
                      <span id="delete" onClick={() => deleteHandle(post.id)}>
                        Deletar
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <div className="pagination">
        <Pagination
          activePage={pg}
          firstPageText={<FiSkipBack />}
          lastPageText={<FiSkipForward />}
          prevPageText={<FiArrowLeft />}
          nextPageText={<FiArrowRight />}
          itemsCountPerPage={12}
          totalItemsCount={pageLength}
          hideDisabled
          hideNavigation
          onChange={(page) => {
            history.push(`/adm/panel/${page}`);
            setPg(page);
          }}
          innerClass="pagination-nav"
          itemClass="pagination-item"
          linkClass="link-pg"
        />
      </div>
    </Container>
  );
};

export default Panel;
