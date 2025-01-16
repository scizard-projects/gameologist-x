import React from 'react';
import { Text, View } from 'react-native';

import { Header } from '../../components';
import { BookmarksProps } from '../../navigation';
import styles from './styles';

function Bookmarks(props: BookmarksProps) {
  return (
    <View style={styles.container}>
      <Header title={props.route.name} />
      <Text>Bookmarks</Text>
    </View>
  );
}

export default Bookmarks;
