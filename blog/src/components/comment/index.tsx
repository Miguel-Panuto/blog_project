import React from 'react';
import { IComment } from '../../@types/interfaces';
import { parseDateWithHours } from '../../utils/dateUtils';

import { Container } from './styles';

interface ICommentProps {
  commentProps: IComment;
  children?: React.ReactChild;
}

const Comment = ({ commentProps, children }: ICommentProps) => {
  return (
    <Container>
      <div className="author">
        <strong>{commentProps.author}</strong>
        <span>{parseDateWithHours(new Date(commentProps.createdAt))}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: `<p>${commentProps.comment}</p>` }}>
      </div>
      {children !== undefined? children : null}
    </Container>
  );
};

export default Comment;
