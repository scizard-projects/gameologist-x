import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TextProps } from 'react-native';

import { Metrics } from '../../../theme';
import Text from '../Text';

const Title: React.FC<TextProps> = ({ children, ...rest }) => {
  const theme = useTheme();

  return (
    <Text
      size={16}
      type="medium"
      numberOfLines={3}
      style={styles.text}
      color={theme.colors.text}
      {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: Metrics.smallMargin,
  },
});

export default Title;
