import { useTheme } from '@react-navigation/native';
import React from 'react';

import Text, { TextProps } from '../Text';

const ReadTime: React.FC<TextProps> = ({ children, ...rest }) => {
  const theme = useTheme();

  const str = (children || 2) + ' min read';

  return (
    <Text type="medium" size={12} color={theme.colors.text} {...rest}>
      {str}
    </Text>
  );
};

export default ReadTime;
