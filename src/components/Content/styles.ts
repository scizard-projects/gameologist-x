import { StyleSheet } from 'react-native';
import { Metrics } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Metrics.baseMargin,
    borderBottomWidth: Metrics.hairlineWidth,
  },
  separator: {
    height: Metrics.hairlineWidth,
    marginHorizontal: Metrics.baseMargin,
  },
});
