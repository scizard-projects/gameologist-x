import { useTheme } from '@react-navigation/native';
import React from 'react';
import EasyContentLoader, {
  InstagramLoader,
} from 'react-native-easy-content-loader';

import styles from './styles';

type ContentLoaderProps = {
  full?: boolean;
};

export default ({ full }: ContentLoaderProps) => {
  const theme = useTheme();
  return (
    <>
      {full ? (
        // @ts-ignore
        <InstagramLoader
          active
          primaryColor={theme.colors.background}
          secondaryColor={theme.colors.card}
        />
      ) : null}
      {/* @ts-ignore */}
      <EasyContentLoader
        active
        title={false}
        listSize={5}
        containerStyles={styles.container}
        primaryColor={theme.colors.background}
        secondaryColor={theme.colors.card}
        paragraphStyles={styles.paragraph}
      />
    </>
  );
};
