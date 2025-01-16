import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { useReduxAction } from '../../hooks/useReduxAction';
import { RootState, actions } from '../../redux';

import Header from '../../components/Header';
import { PostProps } from '../../navigation';
import Page from './Page';
import styles from './styles';

function Post(props: PostProps) {
  const { slug, post } = props.route.params;

  const posts = useSelector((state: RootState) => state.posts);
  const requestPost = useReduxAction(actions.posts.request);

  useEffect(() => {
    requestPost(slug);
  }, [requestPost, slug]);

  const postFlattered = { ...post, ...posts.data[slug] };

  return (
    <View style={styles.container}>
      <Header canGoBack />
      <Page
        error={posts.error}
        post={postFlattered}
        isLoading={posts.isLoading}
      />
    </View>
  );
}

export default Post;
