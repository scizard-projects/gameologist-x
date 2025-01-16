import React from 'react';

import { useTheme } from '@react-navigation/native';
import FastImage, { FastImageProps } from '../../libs/FastImage';
import { Metrics } from '../../theme';

export type IconProps = FastImageProps & {
  size?: number;
};

const Icon = (props: IconProps) => {
  const { size = Metrics.iconSize, style, ...rest } = props;

  const theme = useTheme();
  const tintColor = theme.colors.text;

  const _style = [
    {
      width: size,
      height: size,
    },
    style,
  ];

  return <FastImage style={_style} tintColor={tintColor} {...rest} />;
};

export default Icon;
