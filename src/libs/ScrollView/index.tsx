import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { forwardRef } from 'react';
import { ScrollViewProps, ScrollView as ScrollViewRN } from 'react-native';

const ScrollView = forwardRef<ScrollViewRN, ScrollViewProps>((props, ref) => {
  const paddingBottom = useBottomTabBarHeight();
  return (
    <ScrollViewRN
      ref={ref}
      removeClippedSubviews
      overScrollMode="never"
      contentContainerStyle={{ paddingBottom }}
      {...props}
    />
  );
});

export default ScrollView;
