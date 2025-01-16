import { PortableText as SanityPortableText } from '@portabletext/react-native';
import React from 'react';
import { Text } from 'react-native';

import Carousel from '../Carousel';
import Embed from '../Embed';
import Image from '../Image';

import { defaultBlockStyles } from './Block';
import { DefaultList, defaultListItems } from './List';
import { defaultMarks } from './Marks';

export const DefaultHardBreak = (): React.JSX.Element => <Text>{'\n'}</Text>;

export type PortableTextProps = {
  value: any;
};

const components = {
  types: {
    image: Image,
    embed: Embed,
    carousel: Carousel,
  },
  block: defaultBlockStyles,
  marks: defaultMarks,
  list: DefaultList,
  listItem: defaultListItems,
  hardBreak: DefaultHardBreak,
};

const PortableText = (props: PortableTextProps) => {
  const { value } = props;

  return <SanityPortableText value={value} components={components} />;
};

export default PortableText;
