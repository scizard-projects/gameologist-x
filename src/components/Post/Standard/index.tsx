import React from 'react';
import { View } from 'react-native';

import { Icons } from '../../../theme';
import { Post } from '../../../types';
import Pressable from '../../Pressable';
import PressableIcon from '../../PressableIcon';
import Author from '../../Shared/Author';
import Categories from '../../Shared/Categories';
import Excerpt from '../../Shared/Excerpt';
import Media from '../../Shared/Media';
import PressableBookmark from '../../Shared/PressableBookmark';
import ReadTime from '../../Shared/ReadTime';
import TimeAgo from '../../Shared/TimeAgo';
import Title from '../../Shared/Title';
import styles from './styles';

type Props = {
  post: Post;
  onPress: Function;
};

const Standalone = React.memo(({ post, onPress }: Props) => (
  <Pressable
    disableEffect
    style={styles.container}
    onPress={() => onPress(post)}>
    <Media type="standard" uri={post.image} blurDataURI={post.imageBlurData} />
    <View style={styles.content}>
      <View style={styles.header}>
        <Categories>{post.categories}</Categories>
        <ReadTime>{post.estReadingTime}</ReadTime>
      </View>
      <Title>{post.title}</Title>
      <Excerpt>{post.excerpt}</Excerpt>
      <View style={styles.footer}>
        <View style={styles.info}>
          <Author>{post.authors[0].name}</Author>
          <TimeAgo>{post.publishedAt}</TimeAgo>
        </View>
        <View style={styles.buttons}>
          <PressableBookmark post={post} />
          <PressableIcon source={Icons.share} />
        </View>
      </View>
    </View>
  </Pressable>
));

export default Standalone;
