import React, { forwardRef } from 'react';
import { FlatList, FlatListProps } from 'react-native';

const MyFlatList = forwardRef<FlatList, FlatListProps<any>>((props, ref) => {
  return (
    <FlatList
      ref={ref}
      windowSize={11}
      removeClippedSubviews
      initialNumToRender={5}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="always"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...props}
    />
  );
});

export default MyFlatList;
