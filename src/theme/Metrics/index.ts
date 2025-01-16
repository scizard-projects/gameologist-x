import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const screenWidth = width < height ? width : height;
export const screenHeight = width < height ? height : width;

// const CURRENT_RESOLUTION = Math.sqrt(
//   screenHeight * screenHeight + screenWidth * screenWidth,
// );

const create = (designSize = { width: 414, height: 736 }) => {
  if (
    !designSize ||
    !designSize.width ||
    !designSize.height ||
    typeof designSize.width !== 'number' ||
    typeof designSize.height !== 'number'
  ) {
    throw new Error(
      'react-native-pixel-perfect | create function | Invalid design size object! must have width and height fields of type Number.',
    );
  }
  // const DESIGN_RESOLUTION = Math.sqrt(
  //   designSize.height * designSize.height + designSize.width * designSize.width,
  // );
  // const RESOLUTIONS_PROPORTION = CURRENT_RESOLUTION / DESIGN_RESOLUTION;
  return (size: number) => size; // RESOLUTIONS_PROPORTION * size;
};

export const ratio = create();

export const baseMargin = ratio(16);
export const smallMargin = ratio(8);
export const hairlineWidth = ratio(1);
export const iconSize = ratio(25);
export const tabBarIconSize = ratio(25);
export const doubleBaseMargin = ratio(32);
