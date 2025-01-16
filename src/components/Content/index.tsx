import { useTheme } from '@react-navigation/native';
import React, { memo } from 'react';
import { View, ViewStyle } from 'react-native';

import FlatList from '../../libs/FlatList';
import { Post as PostProps, Section } from '../../types';
import Post from '../Post';
import Text from '../Shared/Text';
import styles from './styles';

type Props = {
  index?: number;
  style?: ViewStyle;
  section: Section;
  onPress: Function;
};

const ItemSeparatorComponent = () => {
  const theme = useTheme();
  const backgroundColor = theme.colors.background;
  return <View style={[styles.separator, { backgroundColor }]} />;
};

// TODO: Do we need to use memo here?
export default memo((props: Props) => {
  const { section, style, onPress, ...rest } = props;
  const { title, data, compact, horizontal, isFirstPostFeatured } = section;

  const theme = useTheme();

  const cardColor = theme.colors.card;
  const backgroundColor = theme.colors.background;

  const ListHeaderComponent = title
    ? () => (
        <View style={[styles.header, { borderColor: backgroundColor }]}>
          <Text type="medium" size={26} color={theme.colors.text}>
            {title}
          </Text>
        </View>
      )
    : //TODO: if index 0 return null else ItemSeparatorComponent
      null;

  return (
    <FlatList
      data={data}
      {...rest}
      renderItem={({ item, index }: { item: PostProps; index: number }) => (
        <Post
          post={item}
          index={index}
          compact={compact}
          onPress={onPress}
          isFirstPostFeatured={isFirstPostFeatured}
        />
      )}
      horizontal={horizontal}
      keyExtractor={item => {
        return item.slug;
      }}
      ListHeaderComponent={ListHeaderComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      style={[styles.container, { backgroundColor: cardColor }, style]}
    />
  );
});
