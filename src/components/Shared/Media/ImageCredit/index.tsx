import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TextProps } from 'react-native';

import { Metrics } from '../../../../theme';
import Text from '../../Text';

const ImageCaption: React.FC<TextProps> = ({ children, ...rest }) => {
  const theme = useTheme();

  if (!children) {
    return null;
  }

  return (
    <Text
      size={10}
      type="bold"
      style={styles.text}
      color={theme.colors.text}
      {...rest}>
      Credits: {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: Metrics.smallMargin / 2,
    marginHorizontal: Metrics.smallMargin / 2,
  },
});

export default ImageCaption;
