import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

import { Container, Header } from './styles';
import Comment from '../../components/comment';

import { IComment, IPost } from '../../@types/interfaces';
import AppBarWithDrawer from '../../components/app_bar_with_drawer';
import { findSinglePost, makeComment } from '../../services/posts_controller';
import { parseDate } from '../../utils/dateUtils';

const PostPage = () => {
  const [post, setPost] = useState<IPost>();
  const [comments, setComments] = useState<IComment[]>([]);
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const { id } = useParams() as any;
  const history = useHistory();

  useEffect(() => {
    const findPost = async () => {
      const findedPost = await findSinglePost(id);
      if (findedPost !== undefined) {
        setPost(findedPost.post);
        setComments(findedPost.comments);
      } else return history.push('/');
    };
    findPost();
    // eslint-disable-next-line
  }, []);

  const handleCommentSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    let formatedString = comment.replaceAll(/(<([^>]+)>)/gi, '');
    formatedString = formatedString.replaceAll('\n', '<br />');
    if (makeComment(id, author, formatedString))
      setComments([
        ...comments,
        {
          _id: Math.random().toString(),
          author,
          comment: formatedString,
          createdAt: new Date(),
        },
      ]);
    setComment('');
    setAuthor('');
  };

  return (
    <>
      <Header thumbnail={post?.thumbnail}>
        <div className="header-content">
          <h2>{post?.title}</h2>
          <div className="date-post">
            <span>{parseDate(post?.date, 'long')}</span>
          </div>
        </div>
        <AppBarWithDrawer />
      </Header>
      <Container>
      <div className="tags">
        <strong>Assuntos: </strong>
        {post?.tags !== undefined &&
        ((post?.tags as unknown) as string[]).length > 0
          ? post?.tags.map((tag, index) => (
              <span key={`${tag}-${index}`}>{tag}</span>
            ))
          : null}
      </div>
        <div
          dangerouslySetInnerHTML={{ __html: post?.content as string }}
          className="content"
        />
        <div className="comments-section">
          <h3>Comentários</h3>
          {(comments.length as number) <= 0 ? (
            <p>Nenhum comentário feito!</p>
          ) : (
            comments.map((commen, index) => (
              <Comment
                key={`${commen.author}-${index}`}
                commentProps={commen}
              />
            ))
          )}
          <div>
            <span>
              Deseja comentar? <strong>Comente logo abaixo</strong>
            </span>
          </div>
          <form onSubmit={handleCommentSubmit}>
            <TextField
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              label="Seu nome"
              fullWidth
              className="input-comment"
              variant="outlined"
              size="small"
            />
            <TextField
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              label="Comentário"
              multiline
              rows={5}
              className="input-comment"
              fullWidth
              variant="outlined"
              size="small"
            />
            <Button
              onSubmit={handleCommentSubmit}
              type="submit"
              color="primary"
              variant="contained"
            >
              Enviar
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default PostPage;
