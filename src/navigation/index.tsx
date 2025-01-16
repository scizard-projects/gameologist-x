import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fonts } from '@react-navigation/native/src/theming/fonts';
import React, { useEffect, useRef } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';

import { TabBarIcon } from '../components';
import { Bookmarks, Games, Home, Post, Settings, Shorts } from '../screens';
import { Colors } from '../theme';
import { Post as PostType } from '../types';

type StackParamList = {
  Bookmarks: undefined;
  Games: undefined;
  Home: undefined;
  Post: { slug: string; post: PostType };
  Settings: undefined;
  Shorts: undefined;
};

export type BookmarksProps = NativeStackScreenProps<
  StackParamList,
  'Bookmarks'
>;
export type GamesProps = NativeStackScreenProps<StackParamList, 'Games'>;
export type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;
export type PostProps = NativeStackScreenProps<StackParamList, 'Post'>;
export type SettingsProps = NativeStackScreenProps<StackParamList, 'Settings'>;
export type ShortsProps = NativeStackScreenProps<StackParamList, 'Shorts'>;
const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

const trackScreenView = (screenName?: string) => {
  if (!screenName) {
    console.warn('.:: No Screen Name Found ::.');
    return;
  }
  console.log('.:: Screen Name: ' + screenName + ' ::.');
  // Your implementation of analytics goes here!
};

const updateStyles = (isDarkMode: boolean, color: string) => {
  StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(color, true);
    StatusBar.setTranslucent(color === 'transparent');
  }
};

const StackNavigator = ({ children }: { children: React.ReactNode }) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {children}
  </Stack.Navigator>
);

const TabHome = () => (
  <StackNavigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Post" component={Post} />
  </StackNavigator>
);

const TabGames = () => (
  <StackNavigator>
    <Stack.Screen name="Games" component={Games} />
  </StackNavigator>
);

const TabBookmarks = () => (
  <StackNavigator>
    <Stack.Screen name="Bookmarks" component={Bookmarks} />
  </StackNavigator>
);

const ShortsSearch = () => (
  <StackNavigator>
    <Stack.Screen name="Shorts" component={Shorts} />
  </StackNavigator>
);

const TabSettings = () => (
  <StackNavigator>
    <Stack.Screen name="Settings" component={Settings} />
  </StackNavigator>
);

const TabNavigator = ({ colors }: { colors: typeof Colors.light.base }) => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.text,
      tabBarItemStyle: {
        justifyContent: 'center',
      },
      tabBarStyle: {
        elevation: 0,
        opacity: 0.9,
        borderTopWidth: 0,
        position: 'absolute',
        backgroundColor: colors.card,
      },
    }}>
    <Tab.Screen
      name="TabHome"
      component={TabHome}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: TabBarIcon('home'),
      }}
    />
    <Tab.Screen
      name="TabGames"
      component={TabGames}
      options={{
        tabBarLabel: 'Games',
        tabBarIcon: TabBarIcon('game'),
      }}
    />
    <Tab.Screen
      name="ShortsSearch"
      component={ShortsSearch}
      options={{
        tabBarLabel: 'Shorts',
        tabBarIcon: TabBarIcon('shorts'),
      }}
    />
    <Tab.Screen
      name="TabBookmarks"
      component={TabBookmarks}
      options={{
        tabBarLabel: 'Bookmarks',
        tabBarIcon: TabBarIcon('bookmark'),
      }}
    />
    <Tab.Screen
      name="TabSettings"
      component={TabSettings}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: TabBarIcon('settings'),
      }}
    />
  </Tab.Navigator>
);

export function Navigation() {
  const navigationRef = useNavigationContainerRef<StackParamList>();
  const routeNameRef = useRef<string | undefined>();

  const handleStateChange = () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.getCurrentRoute()?.name;

    if (previousRouteName !== currentRouteName) {
      // Save the current route name for later comparison
      routeNameRef.current = currentRouteName;
      trackScreenView(currentRouteName);
    }
  };

  const dark = useColorScheme() === 'dark';
  const colors = Colors[dark ? 'dark' : 'light'].base;
  const navigationTheme = {
    dark,
    colors,
    fonts,
  };

  useEffect(() => {
    handleStateChange();
  });

  useEffect(() => {
    updateStyles(dark, colors.card);
  }, [dark, colors.card]);

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={handleStateChange}
      theme={navigationTheme}>
      <TabNavigator colors={colors} />
    </NavigationContainer>
  );
}
