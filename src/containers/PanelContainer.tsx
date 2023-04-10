import { connect } from 'react-redux';

import { RootState } from '../store';
import Panel from '../components/Panel';
import { selectCount } from '../entities/contact/selectors';
import { updateContacts } from '../services/contact';
import { Contact } from '../entities/contact';

const mapState = (state: RootState) => ({
  count: selectCount(state),
});

const mapDispatch = {
  updateContacts: (contacts: Contact[]) => updateContacts({ contacts }),
};

const connector = connect(mapState, mapDispatch);

export default connector(Panel);
