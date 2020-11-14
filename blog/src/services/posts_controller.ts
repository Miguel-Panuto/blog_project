import api from './api';

import { IPost, IDate, IPagePost, IComment } from '../@types/interfaces';

import { IP } from '../constants/ip';

interface IPostsAndCount {
  posts: IPost[];
  count: number;
}

export const indexPosts = async (
  pg: number,
  qty?: number,
  tag?: string,
  year?: string,
  month?: string
): Promise<IPostsAndCount> => {
  const tagToSearch = tag !== undefined ? `&tag=${tag}` : '';
  const dateToSearch =
    year !== undefined && month !== undefined
      ? `&year=${year}&month=${month}`
      : '';
  const res = await api.get(
    `/database/posts/${pg - 1}?qty=${qty}${tagToSearch}${dateToSearch}`
  );
  return {
    posts: res.data.posts.map(
      (post: any): IPost => {
        return {
          id: post._id,
          title: post.title,
          content: post.content,
          date: new Date(post.createdAt),
          tags: post.tags,
          thumbnail: `${IP}/uploads/${post.thumbnail}`,
        };
      }
    ),
    count: res.data.count,
  };
};

export const findSinglePost = async (
  id: string
): Promise<IPagePost | undefined> => {
  try {
    const res = await api.get(`/database/post/${id}`);
    const post = res.data;
    return {
      post: {
        ...post,
        thumbnail: `${IP}/uploads/${post.thumbnail}`,
      },
      comments: post.comments,
    };
  } catch (e) {
    return undefined;
  }
};

export const findDates = async (): Promise<IDate[]> => {
  const res = await api.get('/database/dates/post');
  return res.data;
};

export const makeComment = async (
  id: string,
  author: string,
  comment: string
): Promise<boolean> => {
  try {
    const res = await api.post(`/database/comment/${id}`, {
      author,
      comment,
    });
    if (res.data.ok) return true;
    return false;
  } catch (e) {
    return false;
  }
};

export const getComments = async (id: string): Promise<IComment[]> => {
  const res = await api.get(`/database/comment/${id}`);
  return res.data;
};

export const deleteComment = async (id: string): Promise<boolean> => {
  console.log(id);
  return api
    .delete(`/database/comment/${id}`, {
      headers: {
        authorization: localStorage.getItem('Authorization'),
      },
    })
    .then((res) => (res.data.ok ? true : false))
    .catch((_) => false);
};
