import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../../theme';

export const blockStyles = StyleSheet.create({
  normal: {
    marginBottom: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
  },

  blockquote: {
    paddingHorizontal: 14,
    borderLeftWidth: 3.5,
    borderLeftColor: 'rgba(255, 59, 48, 1)',
    marginBottom: 16,
  },

  h1: {
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
  },
  h2: {
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
  },
  h3: {
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
  },
  h4: {
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
  },
  h5: {
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
  },
  h6: {
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
  },
});

export const listStyles = StyleSheet.create({
  list: {
    marginBottom: Metrics.baseMargin,
  },

  listDeep: {
    marginVertical: 0,
  },

  listItem: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size14,
  },

  bulletListIcon: {
    fontFamily: Fonts.type.regular,
    marginLeft: Metrics.smallMargin,
    marginRight: Metrics.smallMargin,
  },

  listItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export const textStyles = StyleSheet.create({
  h1: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.size22,
  },

  h2: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.size20,
  },

  h3: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.size18,
  },

  h4: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.size16,
  },

  h5: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.size14,
  },

  h6: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.size10,
  },

  normal: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size14,
  },
  blockquote: {
    fontFamily: Fonts.type.italic,
    fontSize: Fonts.size.size14,
  },
});

export const markStyles = StyleSheet.create({
  strong: {
    fontFamily: Fonts.type.bold,
  },

  em: {
    fontStyle: 'italic',
  },

  link: {
    textDecorationLine: 'underline',
  },

  underline: {
    textDecorationLine: 'underline',
  },

  strikeThrough: {
    textDecorationLine: 'line-through',
  },

  code: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: 'rgba(27, 31, 35, 0.05)', // TODO: set theme
    color: '#24292e', // TODO: set theme
  },
});

export const utilityStyles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
});
