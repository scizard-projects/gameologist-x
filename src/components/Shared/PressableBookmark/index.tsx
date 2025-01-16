import React from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

import { useReduxAction } from '../../../hooks/useReduxAction';
import { Toast } from '../../../libs/Toast';
import { RootState, actions } from '../../../redux';
import { Icons } from '../../../theme';
import { Post } from '../../../types';
import PressableIcon from '../../PressableIcon';

const PressableBookmark = ({ post }: { post: Post }) => {
  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  const add = useReduxAction(actions.bookmarks.add);
  const remove = useReduxAction(actions.bookmarks.remove);

  const isBookmarked = !!bookmarks.data[post.id];

  const handlePress = () => {
    if (isBookmarked) {
      Alert.alert(
        'Remove Post?',
        'Removing this will remove it from bookmark.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Remove',
            style: 'destructive',
            onPress: () => {
              remove(post);
              Toast.show({
                type: 'error',
                text1: 'Post Removed',
                text2: post.title,
              });
            },
          },
        ],
        {
          cancelable: true,
        },
      );
    } else {
      add(post);
      Toast.show({
        type: 'success',
        text1: 'Post Saved',
        text2: post.title,
      });
    }
  };

  return (
    <PressableIcon
      // @ts-ignore
      onPress={handlePress}
      source={isBookmarked ? Icons.tabBar.bookmarkFill : Icons.tabBar.bookmark}
    />
  );
};

export default PressableBookmark;
