import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { ViewStyle } from 'react-native';

import { SECTION_TYPE } from '../../constants';
import { Metrics } from '../../theme';
import { Post, Section } from '../../types';
import Content from '../Content';
import ScrollableHeaderSectionList, {
  ScrollableHeaderSectionListProps,
} from '../ScrollableHeaderSectionList';

export interface SectionListProps extends ScrollableHeaderSectionListProps {
  scrollToTop: () => boolean;
}

type Props = {
  sections: [];
  contentContainerStyle?: ViewStyle;
  renderHeader: () => React.ReactElement;
  onPress: (story: Post) => void;
};

let hasScrolledEnough = false;

const SectionList = forwardRef<SectionListProps, Props>(
  (
    { onPress, renderHeader, contentContainerStyle, ...rest }: Props,
    forwardedRef,
  ) => {
    // console.log('..::: RENDERED :::..');
    const sectionListRef = useRef<SectionListProps>(null);

    const handleScroll = (event: any) => {
      const offsetY = event.contentOffset.y;
      hasScrolledEnough = offsetY > Metrics.screenHeight / 2;
    };

    const scrollToTop = () => {
      if (hasScrolledEnough) {
        // @ts-ignore TODO: Remove this check
        sectionListRef.current?.scrollToTop();
      }

      return hasScrolledEnough;
    };

    const renderItem = ({
      index,
      section,
    }: {
      index: number;
      section: any;
    }) => {
      if (index > 0) {
        return null;
      }

      if (section.type === SECTION_TYPE.ADS) {
        return null;
      }

      if (section.type === SECTION_TYPE.SHORTS) {
        return null;
      }

      return (
        <Content index={index} section={section as Section} onPress={onPress} />
      );
    };

    // @ts-ignore TODO: Remove this check
    useImperativeHandle(forwardedRef, () => ({
      scrollToTop,
    }));

    return (
      <ScrollableHeaderSectionList
        {...rest}
        ref={sectionListRef}
        renderItem={renderItem}
        renderHeader={renderHeader}
        onScroll={handleScroll}
        contentContainerStyle={contentContainerStyle}
        // @ts-ignore
        keyExtractor={(item, index) => {
          return item.slug || index;
        }}
      />
    );
  },
);

export default SectionList;
