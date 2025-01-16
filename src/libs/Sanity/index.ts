import { client } from './client';
import { postBySlugQuery, postsQuery } from './queries';
import { Post } from './types';

export const getPosts = (limit = 10) => {
  return client.fetch<Post[]>(postsQuery(limit));
};

export const getPostBySlug = (slug: string) => {
  return client.fetch<Post[]>(postBySlugQuery(), { slug });
};
