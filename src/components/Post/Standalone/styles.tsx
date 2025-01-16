import { StyleSheet } from 'react-native';
import { Metrics } from '../../../theme';

export default StyleSheet.create({
  container: {
    padding: Metrics.baseMargin,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.smallMargin,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: Metrics.smallMargin,
    justifyContent: 'space-between',
  },
  info: {
    flex: 0.85,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  buttons: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
