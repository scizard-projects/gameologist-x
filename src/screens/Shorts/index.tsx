import React from 'react';
import { Text, View } from 'react-native';

import { Header } from '../../components';
import { ShortsProps } from '../../navigation';
import styles from './styles';

function Shorts(props: ShortsProps) {
  return (
    <View style={styles.container}>
      <Header title={props.route.name} />
      <Text>Shorts</Text>
    </View>
  );
}

export default Shorts;
