import React from 'react';
import {
  TextProps as RNTextProps,
  StyleSheet,
  Text as TextRN,
} from 'react-native';
import ParsedText from 'react-native-parsed-text';
import { Fonts } from '../../../theme';
import { openURL } from '../../../utils';

export interface TextProps extends RNTextProps {
  color?: string;
  parse?: boolean;
  size?: number;
  type?: keyof typeof Fonts.type;
}

function handleUrlPress(url: string) {
  openURL(url);
}

function handlePhonePress(phone: string) {
  openURL(phone);
}

function handleEmailPress(email: string) {
  openURL(email);
}

// const TextWrapper: React.FC<TextProps> = React.memo(
//   ({ style, color, size = 16, type = 'medium', parse, children, ...rest }) => {
//     // typeof children !== 'string' || || !children.length
//     if (!children) {
//       return null;
//     }

//     const fontSize =
//       Fonts.size[`size${size}` as keyof typeof Fonts.size] || size;
//     const fontFamily = Fonts.type[type] || type;

//     const Component = parse ? ParsedText : Text;

//     return (
//       <Component
//         {...rest}
//         style={[
//           style,
//           {
//             color,
//             fontSize,
//             fontFamily,
//           },
//         ]}
//         parse={[
//           { type: 'url', style: styles.url, onPress: handleUrlPress },
//           { type: 'phone', style: styles.phone, onPress: handlePhonePress },
//           { type: 'email', style: styles.email, onPress: handleEmailPress },
//         ]}>
//         {children}
//       </Component>
//     );
//   },
//   (prevProps, nextProps) => {
//     return prevProps.color === nextProps.color;
//   },
// );

const Text: React.FC<TextProps> = ({
  style,
  color,
  size = 14,
  type = 'regular',
  parse,
  children,
  ...rest
}) => {
  // typeof children !== 'string' || || !children.length
  if (!children) {
    return null;
  }

  const fontSize = Fonts.size[`size${size}` as keyof typeof Fonts.size] || size;
  const fontFamily = Fonts.type[type] || type;

  const Component = parse ? ParsedText : TextRN;

  return (
    <Component
      {...rest}
      style={[
        style,
        {
          color,
          fontSize,
          fontFamily,
          lineHeight: fontSize + 5,
        },
      ]}
      parse={[
        { type: 'url', style: styles.url, onPress: handleUrlPress },
        { type: 'phone', style: styles.phone, onPress: handlePhonePress },
        { type: 'email', style: styles.email, onPress: handleEmailPress },
      ]}>
      {children}
    </Component>
  );
};

const styles = StyleSheet.create({
  url: {
    color: 'rgb(0, 122, 255)',
  },
  email: {
    color: 'rgb(0, 122, 255)',
  },
  phone: {
    color: 'rgb(0, 122, 255)',
  },
});

export default Text;
