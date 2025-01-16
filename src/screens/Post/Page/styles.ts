import { StyleSheet } from 'react-native';
import { Metrics } from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Metrics.baseMargin,
  },
  intro: {
    paddingHorizontal: Metrics.baseMargin,
  },
});
