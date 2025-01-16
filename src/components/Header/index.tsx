import { Header as HeaderRN } from '@react-navigation/elements';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { useNavigationBackAction } from '../../hooks/useNavigationBack';
import { Fonts, Icons, Metrics } from '../../theme';
import PressableIcon from '../PressableIcon';

const Title = (props: any) => {
  return (
    <Text adjustsFontSizeToFit {...props}>
      {props.children}
    </Text>
  );
};

const Header = ({
  title = '',
  canGoBack,
}: {
  title?: string;
  canGoBack?: boolean;
}) => {
  const style = { opacity: 0.9 };
  const headerLeftStyle = { marginHorizontal: Metrics.ratio(15) };
  const theme = useTheme();
  const goBack = useNavigationBackAction();
  const headerLeft = canGoBack
    ? () => (
        <PressableIcon
          style={headerLeftStyle}
          source={Icons.back}
          onPress={() => goBack()}
        />
      )
    : undefined;

  return (
    <HeaderRN
      title={title}
      headerTitle={Title}
      headerStyle={style}
      headerTitleAlign="center"
      headerLeft={headerLeft}
      headerTitleStyle={{
        color: theme.colors.text,
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.size.size26,
      }}
    />
  );
};

export default Header;
