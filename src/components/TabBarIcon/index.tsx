import React from 'react';

import { Icons } from '../../theme';
import Icon from '../Icon';

type TabBarIconSource = keyof typeof Icons.tabBar;

const TabBarIcon =
  (source: TabBarIconSource) =>
  ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => {
    const key = focused ? (`${source}Fill` as TabBarIconSource) : source;
    const src = Icons.tabBar[key];

    return <Icon tintColor={color} source={src} size={size} />;
  };

export default TabBarIcon;
