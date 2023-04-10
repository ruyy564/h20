import { connect } from 'react-redux';

import { RootState } from '../store';
import CommonEmployeeBasePage from '../pages/CommonEmployeeBasePage';
import { selectContacts } from '../entities/contact/selectors';

const mapState = (state: RootState) => ({
  contacts: selectContacts(state),
});

const connector = connect(mapState);

export default connector(CommonEmployeeBasePage);
