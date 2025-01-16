import type {
  PortableTextListComponent,
  PortableTextListItemComponent,
} from '@portabletext/react';
import type { PortableTextListItemType } from '@portabletext/types';

import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

import { listStyles } from './styles';

export const DefaultList: PortableTextListComponent = ({ value, children }) => {
  const base = value.level > 1 ? listStyles.listDeep : listStyles.list;
  const padding = { paddingLeft: 16 * value.level };
  return <View style={[base, padding]}>{children}</View>;
};

export const defaultListItems: Record<
  PortableTextListItemType,
  PortableTextListItemComponent | undefined
> = {
  bullet: ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    const color = theme.colors.text;

    return (
      <View style={listStyles.listItemWrapper}>
        <Text style={[{ color }, listStyles.bulletListIcon]}>{'\u00B7'}</Text>
        <Text style={[{ color }, listStyles.listItem]}>{children}</Text>
      </View>
    );
  },
  number: ({ children, index }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    const color = theme.colors.text;
    return (
      <View style={listStyles.listItemWrapper}>
        <Text style={[{ color }, listStyles.bulletListIcon]}>
          {index + 1}.{' '}
        </Text>
        <Text style={[{ color }, listStyles.listItem]}>{children}</Text>
      </View>
    );
  },
};
