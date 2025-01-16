import { PlatformPressable } from '@react-navigation/elements';
import React, { useRef } from 'react';
import {
  Animated,
  GestureResponderEvent,
  PressableProps as PressablePropsRN,
  Pressable as PressableRN,
  StyleProp,
  ViewStyle,
} from 'react-native';

export type PressableProps = Omit<PressablePropsRN, 'style'> &
  Omit<PressablePropsRN, 'onPress'> & {
    pressColor?: string;
    pressOpacity?: number;
    borderless?: boolean;
    foreground?: boolean;
    clickThreshold?: number;
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    children: React.ReactNode;
    disableEffect?: boolean;
    onPress?: () => void;
  };

function Pressable({
  children,
  onPress,
  foreground = false,
  borderless = false,
  clickThreshold = 1500,
  disableEffect = false,
  ...rest
}: PressableProps): React.JSX.Element {
  const lastPressTimeRef = useRef(0);

  const handlePress = (event: GestureResponderEvent) => {
    if (!onPress) {
      return;
    }
    const currentTime = Date.now();
    const timeDiff = currentTime - lastPressTimeRef.current;

    if (timeDiff > clickThreshold) {
      onPress(event);
      lastPressTimeRef.current = currentTime;
    }
  };

  if (disableEffect) {
    return (
      <PressableRN onPress={handlePress} {...rest}>
        {children}
      </PressableRN>
    );
  }

  return (
    <PlatformPressable
      android_ripple={{
        borderless,
        foreground,
      }}
      onPress={handlePress}
      {...rest}>
      {children}
    </PlatformPressable>
  );
}

export default Pressable;
