import type { PortableTextComponent } from '@portabletext/react';
import type {
  PortableTextBlock,
  PortableTextBlockStyle,
} from '@portabletext/types';

import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

import { blockStyles, textStyles } from './styles';

type BlockStyleName = keyof typeof blockStyles;

export const DefaultBlock: PortableTextComponent<PortableTextBlock> = ({
  children,
  value,
}) => {
  const theme = useTheme();
  const color = theme.colors.text;
  const style = (value.style || 'normal') as BlockStyleName;

  return (
    <View style={blockStyles[style]}>
      <Text
        style={[
          {
            color,
          },
          textStyles[style],
        ]}>
        {children}
      </Text>
    </View>
  );
};

export const defaultBlockStyles: Record<
  PortableTextBlockStyle,
  PortableTextComponent<PortableTextBlock> | undefined
> = {
  normal: DefaultBlock,
  blockquote: DefaultBlock,
  h1: DefaultBlock,
  h2: DefaultBlock,
  h3: DefaultBlock,
  h4: DefaultBlock,
  h5: DefaultBlock,
  h6: DefaultBlock,
};
