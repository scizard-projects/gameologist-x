import React from 'react';
import { Text, View } from 'react-native';

import { Header } from '../../components';
import { SettingsProps } from '../../navigation';
import styles from './styles';

function Settings(props: SettingsProps) {
  return (
    <View style={styles.container}>
      <Header title={props.route.name} />
      <Text>Settings</Text>
    </View>
  );
}

export default Settings;
