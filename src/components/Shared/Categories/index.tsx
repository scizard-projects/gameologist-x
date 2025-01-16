import React from 'react';
import { Text as TextRN } from 'react-native';

import { StyleSheet } from 'react-native';
import { Category } from '../../../types';
import Text from '../Text';

export interface Props {
  children: Category[];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Categories: React.FC<Props> = ({ children }) => {
  return (
    <Text
      type="bold"
      size={12}
      style={styles.container}
      numberOfLines={1}
      ellipsizeMode="clip">
      {children.map(category => (
        <TextRN key={category.slug} numberOfLines={1}>
          <TextRN
            style={{ color: category.color }}
            onPress={() => {
              console.log('You pressed: ' + category.name.toUpperCase());
            }}>
            {category.name.toUpperCase()}
          </TextRN>
          {'  '}
        </TextRN>
      ))}
    </Text>
  );
};

export default Categories;
