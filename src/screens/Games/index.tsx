import React from 'react';
import { Text, View } from 'react-native';

import { Header } from '../../components';
import { GamesProps } from '../../navigation';
import styles from './styles';

function Games(props: GamesProps) {
  return (
    <View style={styles.container}>
      <Header title={props.route.name} />
      <Text>Games</Text>
    </View>
  );
}

export default Games;
