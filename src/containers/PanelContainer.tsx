import { connect } from 'react-redux';

import { RootState } from '../store';
import Panel from '../components/Panel';
import { selectCount } from '../entities/contact/selectors';

const mapState = (state: RootState) => ({
  count: selectCount(state),
});

const connector = connect(mapState);

export default connector(Panel);
