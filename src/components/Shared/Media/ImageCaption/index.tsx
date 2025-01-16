import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TextProps } from 'react-native';

import { Metrics } from '../../../../theme';
import Text from '../../Text';

const ImageCredit: React.FC<TextProps> = ({ children, ...rest }) => {
  const theme = useTheme();

  if (!children) {
    return null;
  }

  return (
    <Text
      size={12}
      type="medium"
      style={styles.text}
      color={theme.colors.text}
      {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: Metrics.smallMargin / 2,
    marginHorizontal: Metrics.smallMargin / 2,
  },
});

export default ImageCredit;
