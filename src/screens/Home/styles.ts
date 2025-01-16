import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: Metrics.baseMargin,
  },
  item: {
    marginBottom: Metrics.baseMargin,
  },
  header: {
    flexDirection: 'row',
    marginBottom: Metrics.smallMargin,
  },
  heading: {
    color: '#121212',
    fontSize: Fonts.size.size26,
    fontFamily: Fonts.type.medium,
    lineHeight: Fonts.size.size30,
  },
  excerpt: {
    color: '#121212',
    fontSize: Fonts.size.size16,
    // TODO: fontFamily: Fonts.type.body,
    lineHeight: Fonts.size.size20,
    marginTop: Metrics.smallMargin,
    marginBottom: Metrics.baseMargin,
  },
  label: {
    color: '#D0021B',
    fontSize: Fonts.size.size12,
    fontFamily: Fonts.type.bold,
    marginRight: Metrics.smallMargin,
  },
  time: {
    color: '#D0021B',
    fontSize: Fonts.size.size12,
    // TODO: fontFamily: Fonts.type.bold,
  },
  cover: {
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    height: Metrics.screenWidth / 2,
  },
});
