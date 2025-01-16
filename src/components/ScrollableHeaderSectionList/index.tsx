import React, { forwardRef, useImperativeHandle } from 'react';
import { SectionList, SectionListProps, View } from 'react-native';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const HEADER_HEIGHT = 60; // The height of the animated header
const COLLAPSE_THRESHOLD = 40; // The scroll threshold to trigger header collapse

const AnimatedSectionList = Animated.createAnimatedComponent(
  SectionList<string>,
);

interface AnimatedSectionListProps
  extends InstanceType<typeof AnimatedSectionList> {
  _wrapperListRef: {
    _listRef: {
      scrollToOffset: ({
        offset,
        animated,
      }: {
        offset: number;
        animated: boolean;
      }) => void;
    };
  };
}

export interface ScrollableHeaderSectionListProps
  extends SectionListProps<any> {
  headerHeight?: number;
  collapseThreshold?: number;
  renderHeader: () => React.ReactElement;
}

const ScrollableHeaderSectionList = forwardRef<any, any>(
  (props: ScrollableHeaderSectionListProps, forwardedRef): JSX.Element => {
    const {
      onScroll,
      headerHeight = HEADER_HEIGHT,
      collapseThreshold = COLLAPSE_THRESHOLD,
      renderHeader,
      contentContainerStyle,
      ...rest
    } = props;
    const scrollY = useSharedValue(0);
    const lastScrollY = useSharedValue(0);
    const scrollViewRef = useAnimatedRef<AnimatedSectionListProps>();

    useImperativeHandle(forwardedRef, () => ({
      scrollToTop: () => {
        scrollViewRef.current?._wrapperListRef._listRef.scrollToOffset({
          offset: 0,
          animated: true,
        });
      },
    }));

    const animateLoading = (event: any) => {
      setTimeout(() => {
        'worklet';
        if (onScroll) {
          onScroll(event);
        }
      });
    };

    const scrollHandler = useAnimatedScrollHandler(event => {
      const currentOffset = event.contentOffset.y;
      const diff = currentOffset - lastScrollY.value;
      scrollY.value = Math.max(0, Math.min(scrollY.value + diff, headerHeight));
      lastScrollY.value = currentOffset;

      runOnJS(animateLoading)(event);
    });

    const handleSnap = () => {
      if (
        scrollY.value !== 0 &&
        scrollY.value < headerHeight &&
        scrollViewRef.current?._wrapperListRef
      ) {
        let offset = lastScrollY.value - scrollY.value;
        if (scrollY.value > collapseThreshold) {
          offset += headerHeight;
        }
        scrollViewRef.current._wrapperListRef._listRef.scrollToOffset({
          offset,
          animated: true,
        });
      }
    };

    const headerStyles = useAnimatedStyle(() => {
      return {
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: headerHeight,
        position: 'absolute',
        transform: [
          {
            translateY: interpolate(
              scrollY.value,
              [0, headerHeight],
              [0, -headerHeight],
              {
                extrapolateRight: 'clamp',
              },
            ),
          },
        ],
      };
    });

    const paddingStyles = {
      paddingTop: headerHeight,
    };

    return (
      <View>
        <Animated.View style={[headerStyles]}>{renderHeader()}</Animated.View>
        <AnimatedSectionList
          ref={scrollViewRef}
          scrollEventThrottle={16}
          onScroll={scrollHandler}
          onMomentumScrollEnd={handleSnap}
          contentContainerStyle={[contentContainerStyle, paddingStyles]}
          {...rest}
        />
      </View>
    );
  },
);

export default ScrollableHeaderSectionList;
