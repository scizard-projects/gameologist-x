// import React from 'react';

// import {
//   ImageProps as ImagePropsRN,
//   Image as ImageRN,
//   ImageStyle,
// } from 'react-native';

// type Source = {
//   uri: string;
// };

// export type ImageProps = ImagePropsRN & {
//   blurDataSource?: Source;
// };

// export type { ImageStyle };

// const Image = ({ source, blurDataSource, ...rest }: ImageProps) => {
//   return (
//     <ImageRN
//       source={source}
//       loadingIndicatorSource={blurDataSource}
//       {...rest}
//     />
//   );
// };

// export default Image;

// import React, { useEffect, useState } from 'react';

// import FastImage, { FastImageProps, ImageStyle } from '../../libs/FastImage';

// type Priority = 'low' | 'normal' | 'high';
// type Cache = 'immutable' | 'web' | 'cacheOnly';

// type Source = {
//   uri: string;
//   headers?: {
//     [key: string]: string;
//   };
//   priority?: Priority;
//   cache?: Cache;
// };

// export type ImageProps = FastImageProps &
//   Omit<FastImageProps, 'source'> & {
//     source: Source;
//     blurDataSource?: Source;
//   };

// export type { ImageStyle };

// const Image = ({ source, blurDataSource, ...rest }: ImageProps) => {
//   const [imageSource, setImageSource] = useState(blurDataSource);

//   useEffect(() => {
//     const preloadImage = async () => {
//       try {
//         await FastImage.preload([source]);
//         setImageSource(source);
//       } catch (error) {
//         console.error('Error preloading image:', error);
//       }
//     };

//     preloadImage();
//   }, [source, blurDataSource]);

//   return (
//     <FastImage
//       source={imageSource}
//       {...rest}
//       onLoad={event => {
//         console.log(Object.keys(event.nativeEvent));
//       }}
//     />
//   );
// };

// export default Image;

import React, { useState } from 'react';
import { View } from 'react-native';

import FastImage, { FastImageProps, ImageStyle } from '../../libs/FastImage';

type Priority = 'low' | 'normal' | 'high';
type Cache = 'immutable' | 'web' | 'cacheOnly';

type Source = {
  uri: string;
  headers?: {
    [key: string]: string;
  };
  priority?: Priority;
  cache?: Cache;
};

export type ImageProps = FastImageProps &
  Omit<FastImageProps, 'source'> & {
    source: Source;
    blurDataSource?: Source;
  };

export type { ImageStyle };

const Image = ({ source, blurDataSource, style, ...rest }: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <View>
      <FastImage
        style={style}
        source={source}
        {...rest}
        onLoad={() => {
          setLoaded(true);
        }}
      />
      {!loaded && (
        <FastImage
          // eslint-disable-next-line react-native/no-inline-styles
          style={[style, { position: 'absolute' }]}
          source={blurDataSource}
          {...rest}
        />
      )}
    </View>
  );
};

export default Image;
