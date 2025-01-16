import React from 'react';

import FastImage, { ImageStyle } from '../../../libs/FastImage';
import Image from '../../Image';

import { Metrics } from '../../../theme';
import ImageCaption from './ImageCaption';
import ImageCredit from './ImageCredit';

const actualWidth = Metrics.ratio(1280);
const actualHeight = Metrics.ratio(720);

type Props = {
  uri: string;
  blurDataURI?: string;
  credits?: string;
  caption?: string;
  type?: 'standalone' | 'standard' | 'compact';
  style?: ImageStyle;
};

const Media = React.memo(
  ({ uri, blurDataURI, type = 'standard', caption, credits, style }: Props) => {
    if (!uri) {
      return null;
    }

    let width = Metrics.screenWidth - Metrics.doubleBaseMargin;
    if (type === 'standalone') {
      width = Metrics.screenWidth;
    } else if (type === 'compact') {
      width = Metrics.screenWidth / 2.5;
    }
    const height = (width * actualHeight) / actualWidth;

    return (
      <>
        {caption ? <ImageCaption>{caption}</ImageCaption> : null}
        {blurDataURI ? (
          <Image
            source={{
              uri,
              priority: 'low',
            }}
            blurDataSource={{
              uri: blurDataURI,
            }}
            style={[style, { width, height }]}
          />
        ) : (
          <FastImage
            source={{
              uri,
              priority: 'low',
            }}
            style={[style, { width, height }]}
          />
        )}
        {credits ? <ImageCredit>{credits}</ImageCredit> : null}
      </>
    );
  },
  () => true,
);

export default Media;
