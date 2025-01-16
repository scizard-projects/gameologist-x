import { useTheme } from '@react-navigation/native';
import React from 'react';
import Text, { TextProps } from '../Text';

const Author: React.FC<TextProps> = ({ children, ...rest }) => {
  const theme = useTheme();
  return (
    <Text type="medium" size={12} color={theme.colors.text} {...rest}>
      {children}
    </Text>
  );
};

export default Author;
