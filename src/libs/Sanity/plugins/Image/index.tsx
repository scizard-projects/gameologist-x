import React from 'react';
import { StyleSheet, View } from 'react-native';

import Media from '../../../../components/Shared/Media';
import { Metrics } from '../../../../theme';

export type Props = {
  value: {
    url: string;
    blurDataURL: string;
    title?: string;
    caption?: string;
    credits?: string;
  };
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Metrics.smallMargin,
  },
});

const Image = (props: Props) => {
  const { url, credits, caption, title, blurDataURL } = props.value;

  return (
    <View style={styles.container}>
      <Media
        uri={url}
        type="standalone"
        credits={credits}
        caption={caption || title}
        blurDataURI={blurDataURL}
      />
    </View>
  );
};

export default Image;
