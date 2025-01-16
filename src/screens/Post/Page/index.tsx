import React from 'react';
import { Text, View } from 'react-native';

import Categories from '../../../components/Shared/Categories';
import Excerpt from '../../../components/Shared/Excerpt';
import Media from '../../../components/Shared/Media';
import ReadTime from '../../../components/Shared/ReadTime';
import Title from '../../../components/Shared/Title';
import PortableText from '../../../libs/Sanity/plugins/PortableText';
import ScrollView from '../../../libs/ScrollView';
import { Post } from '../../../types';

import ContentLoader from './ContentLoader';
import styles from './styles';

interface Props {
  post: Post;
  isLoading: boolean;
  error: string | undefined;
}

function Page(props: Props) {
  const { post, isLoading, error } = props;

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (isLoading && !post) {
    return (
      <View style={styles.container}>
        <ContentLoader full />
      </View>
    );
  }

  if (!post) {
    return (
      <View style={styles.container}>
        <Text>Post Not Found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Media
        type="standalone"
        uri={post.image}
        credits={post.imageCredits}
        blurDataURI={post.imageBlurData}
      />
      <View style={styles.header}>
        <Categories>{post.categories}</Categories>
        <ReadTime>{post.estReadingTime}</ReadTime>
      </View>
      <View style={styles.intro}>
        <Title>{post.title}</Title>
        <Excerpt>{post.excerpt}</Excerpt>
      </View>
      {post.content ? <PortableText value={post.content} /> : <ContentLoader />}
    </ScrollView>
  );
}

export default Page;
