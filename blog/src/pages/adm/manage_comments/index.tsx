import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { FiTrash2 } from 'react-icons/fi';

import { Container } from './styles';
import Comment from '../../../components/comment';

import { IComment } from '../../../@types/interfaces';

import Header from '../components/header';
import isLoged from '../../../services/isLoged';
import { deleteComment, getComments } from '../../../services/posts_controller';

const ManageComments = () => {
  const history = useHistory();
  const [comments, setComments] = useState<IComment[]>([]);
  const { id }: any = useParams();

  useEffect(() => {
    const verifyLogin = async () => {
      if (!(await isLoged())) history.push('/adm/login');
    };
    verifyLogin();
    loadComments();
    // eslint-disable-next-line
  }, []);

  const loadComments = async () => {
    setComments(await getComments(id as string));
  };

  return (
    <Container>
      <Header />
      <div className="comments">
        {comments.length <= 0 ? (
          <p>Nenhum comentário encontrado...</p>
        ) : (
          comments.map((comment, index) => (
            <Comment key={`${comment.author}-${index}}`} commentProps={comment}>
              <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={async () => {
                    if (window.confirm('Deseja mesmo deletar esta postagem?')) {
                      if (await deleteComment(comment._id)) {
                        alert('Deletado com sucesso!');
                        setComments(
                          comments.filter((com) => com._id !== comment._id)
                        );
                      } else {
                        alert('Ocorreu um erro no servidor');
                      }
                    }
                  }}
                  startIcon={<FiTrash2 />}
                >
                  Deletar
                </Button>
              </div>
            </Comment>
          ))
        )}
      </div>
    </Container>
  );
};

export default ManageComments;
