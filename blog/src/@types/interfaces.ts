export interface IPost {
  id: string;
  title: string;
  content: string;
  date: Date;
  tags: string[];
  thumbnail: string;
}

export interface IDate {
  year: string;
  months: string[];
}

export interface IComment {
  _id: string;
  author: string;
  comment: string;
  createdAt: Date;
}

export interface IPagePost {
  post: IPost,
  comments: IComment[];
}
