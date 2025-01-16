import { useTheme } from '@react-navigation/native';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import React from 'react';

import Text from '../Text';

export interface Props {
  children: string;
}

const TimeAgoProps: React.FC<Props> = ({ children, ...rest }) => {
  const theme = useTheme();

  return (
    <Text type="medium" size={12} color={theme.colors.text} {...rest}>
      {'  •  '}
      {formatDistanceToNow(children, {
        addSuffix: true,
      })}
    </Text>
  );
};

export default TimeAgoProps;
