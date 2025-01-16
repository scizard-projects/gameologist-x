import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TextProps } from 'react-native';

import Text from '../Text';

const Excerpt: React.FC<TextProps> = ({ children, ...rest }) => {
  const theme = useTheme();
  return (
    <Text
      size={14}
      type="regular"
      color={theme.colors.text}
      numberOfLines={5}
      style={styles.text}
      {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    textAlign: 'justify',
  },
});

export default Excerpt;
