import React from 'react';
import { Platform } from 'react-native';

import { Metrics } from '../../theme';
import Icon, { IconProps } from '../Icon';
import Pressable, { PressableProps } from '../Pressable';

type Props = Omit<PressableProps, 'children'> &
  Pick<IconProps, 'source'> &
  Pick<IconProps, 'size'>;

const PressableIcon = (props: Props) => {
  const { size, source, ...rest } = props;
  return (
    <Pressable
      borderless
      foreground
      hitSlop={Platform.select({
        ios: undefined,
        default: {
          top: Metrics.smallMargin,
          right: Metrics.smallMargin,
          bottom: Metrics.smallMargin,
          left: Metrics.smallMargin,
        },
      })}
      {...rest}>
      <Icon source={source} size={size} />
    </Pressable>
  );
};

export default PressableIcon;
