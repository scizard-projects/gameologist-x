import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { AppState, BackHandler } from 'react-native';
import { useSelector } from 'react-redux';

import { useReduxAction } from '../../hooks/useReduxAction';
import { RootState, actions } from '../../redux';

import { Header } from '../../components';
import SectionList, { SectionListProps } from '../../components/SectionList';
import { HomeProps } from '../../navigation';
import { Post } from '../../types';

let backgroundTimestamp: number;

const Home = (props: HomeProps): JSX.Element => {
  // This causing re-rendering
  const tabBarHeight = useBottomTabBarHeight();

  const sections = useSelector((state: RootState) => state.sections);
  const requestSections = useReduxAction(actions.sections.request);

  useEffect(() => {
    requestSections();
  }, [requestSections]);

  const storiesRef = useRef<SectionListProps>();

  const handleRefresh = () => {
    if (storiesRef.current?.scrollToTop()) {
      // TODO: refresh list
      return true;
    }
    return false;
  };

  useFocusEffect(
    React.useCallback(() => {
      const handleAppStateChange = (nextAppState: string) => {
        if (nextAppState === 'background') {
          backgroundTimestamp = Date.now();
        } else if (nextAppState === 'active') {
          const currentTime = Date.now();
          if (currentTime - backgroundTimestamp >= 1 * 60 * 1000) {
            handleRefresh();
          }
          backgroundTimestamp = 0;
        }
      };

      const onBackPress = () => {
        return handleRefresh();
      };

      const subscriptionBackHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      const subscriptionAppState = AppState.addEventListener(
        'change',
        handleAppStateChange,
      );

      return () => {
        subscriptionBackHandler.remove();
        subscriptionAppState.remove();
      };
    }, []),
  );

  return (
    <SectionList
      // @ts-ignore TODO: Remove this check
      ref={storiesRef}
      onPress={(post: Post) => {
        props.navigation.navigate('Post', { slug: post.slug, post });
      }}
      sections={sections.data as any}
      contentContainerStyle={{
        paddingBottom: tabBarHeight,
      }}
      renderHeader={() => <Header title={props.route.name} />}
    />
  );
};

export default Home;
